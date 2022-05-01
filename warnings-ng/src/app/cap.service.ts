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

  constructor() { }

  private processJson(data: AlertsApi, resolve: Function, reject: Function): void {
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

  getAlerts(): Promise<Alert[]> {

    console.log('loading...')
    return new Promise<Alert[]>((resolve, reject) => {
      console.time('local-storage-get')
        chrome.storage.local.get(['source', 'file'])
          .then((result: { [key: string]: string }) => {
            const source = result['source'];
            console.timeEnd('local-storage-get')
            console.log("Current source is: " + source)

            if (source === 'file') {
              const filename = result['file']
              console.log('Filename is ', filename)
              $.getJSON(filename).done(
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
    })

  }

}