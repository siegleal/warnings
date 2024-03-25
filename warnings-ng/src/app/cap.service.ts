import { Injectable } from '@angular/core';
import { Alert, AlertsApi, EventType, Feature, AlertStorage, AlertStatus } from '../utils';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  URLS: { [key: string]: string } = {
    "base": "http://api.weather.gov/alerts",
    "active": "http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement",
    "tornadoes": "http://api.weather.gov/alerts?event=Tornado%20Warning"
  }
  lastJson: AlertsApi | null = null

  constructor() { }

  getUrl(): Promise<string> {
    return chrome.storage.local.get(['types', 'active'])
      .then((storageResult: { [key: string]: string }) => {
        const typesResult = storageResult['types'];
        const active = storageResult['active'] === undefined ? true : storageResult['active'];
        let resultUrl = this.URLS['base']
        if (active) {
          resultUrl += "/active?status=actual"
        } else {
          resultUrl += "?status=actual"
        }

        if (typesResult === undefined) {
          return resultUrl
        }
        return resultUrl + "&event=" + typesResult;
      })

  }

  getLastJson(): Promise<AlertsApi> {
    return new Promise<AlertsApi>((resolve, reject) => {
      if (this.lastJson !== null) {
        resolve(this.lastJson)
      }
      reject('lastJson is not set')
    })
  }

  private processJson(data: AlertsApi): Alert[] {
    this.lastJson = data
    let features: Feature[] = data.features;
    return features
      .filter(elem => {
        if (elem.properties.event === 'Special Weather Statement') {
          return elem.properties.description ? elem.properties.description.includes('thunderstorm') : false;
        }
        return true;
      })
      .map(f => new Alert(f))
      .sort((a, b) => a.alertClass.priority - b.alertClass.priority)
  }

  getAlerts(): Promise<Alert[]> {
    const headers = { 'method': 'GET', 'headers': { 'Accept': 'application/geo+json' } }

    return this.getUrl()
      .then((url: string) => {
        console.log('URL: %s', url)
        return fetch(url, headers)
      })
      .then(response => response.json())
      .then((json: AlertsApi) => this.processJson(json))
      .then((alerts: Alert[]) => {
        alerts = alerts.sort((a: Alert, b: Alert) => a.status < b.status ? -1 : 1);
        return alerts;
      })
  }


  async storeAlerts(alerts: Alert[]) {
    const currentStorage = await chrome.storage.local.get('alerts');
    let currentStorageValue = currentStorage['alerts'] === undefined ? [] : currentStorage['alerts'];
    let currentStorageMap = new Map<string, Alert>(currentStorageValue.map((a: Alert) => [a.id, a]));
    let events = new Set<string>();
    alerts.forEach((a: Alert) => {
      events.add(a.event);
      let isNew = !currentStorageMap.has(a.id);
      if (!isNew) {
        let oldClass = currentStorageMap.get(a.id)!.alertClass;
        if (oldClass > a.alertClass) {
          a.status = AlertStatus.UPGRADED
        } else {
          a.status = AlertStatus.EXISTING
        }
      }
    });
    console.log('Set of events');
    Array.from(events).sort().forEach((val: string, index: Number, array: Array<string>) => {
      console.log(val);
    })
    chrome.storage.local.set({ 'alerts': alerts });
  }

}