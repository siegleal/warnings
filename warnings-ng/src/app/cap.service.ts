import { Injectable } from '@angular/core';
import { Alert, AlertsApi, EventType, Feature } from '../utils';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  URLS: {[key: string]: string} = {
    "active":"http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement", 
    "tornadoes":"http://api.weather.gov/alerts?event=Tornado%20Warning"
  }
  lastJson: AlertsApi|null = null

  constructor() { }

  getLastJson(): Promise<AlertsApi> {
    return new Promise<AlertsApi>((resolve, reject) => {
      if (this.lastJson !== null) {
        resolve(this.lastJson)
      }
      reject('lastJson is not set')
    })
  }

  private processJson(data: AlertsApi, resolve: Function, reject: Function): void {
    this.lastJson = data
    let features: Feature[] = data.features;
    resolve(
      features
        .filter(elem => {
          if (elem.properties.event === 'Special Weather Statement') {
            return elem.properties.description.includes('thunderstorm');
          }
          return true;
        })
        .map(f => new Alert(f))
        .sort((a, b) => b.priority() - a.priority())
    )
  }

  getAlerts(source: string = 'active', filename: string | null = null): Promise<Alert[]> {

    console.log('loading...')
    return new Promise<Alert[]>((resolve, reject) => {
      console.log("Current source is: " + source)

      if (source === 'file') {
        console.log('Filename is ', filename)
        $.getJSON(filename!).done(
          (data: AlertsApi) => {
            this.processJson(data, resolve, reject);
          }
        )

      } else {

        const url = this.URLS[source];
        const headers = { 'method': 'GET', 'headers': { 'Accept': 'application/geo+json' } }

        console.log('URL: ', url);
        console.log('HEADERS: ', headers);

        fetch(url, headers)
          .then(response => response.json())
          .then((json: AlertsApi) => this.processJson(json, resolve, reject))
      }
    })
  }

}