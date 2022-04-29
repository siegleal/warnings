import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Alert, AlertsApi, EventType, Feature } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  URLS: {[key: string]: string} = {
    "active":"http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement", 
    "tornadoes":"http://api.weather.gov/alerts?event=Tornado%20Warning"
  }

  constructor() { }

  getAlerts(): Promise<Alert[]> {

      console.log('loading...')
      return new Promise<Alert[]>((resolve, reject) => {
        chrome.storage.local.get(['source'])
          .then((result: { [key: string]: string }) => {
            console.log("Current source is: " + result['source'])
            const url = this.URLS[result['source']];
            const headers = { 'method': 'GET', 'headers': { 'Accept': 'application/geo+json' } }

            console.log('URL: ', url);
            console.log('HEADERS: ', headers);

            fetch(url, headers)
              .then(response => response.json())
              .then((data: AlertsApi) => {
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
                  .sort((a,b) => b.priority() - a.priority())
                )

              })
          })
      })

  }

}