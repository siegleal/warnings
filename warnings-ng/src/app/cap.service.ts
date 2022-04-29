import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Alert, AlertsApi, EventType, Feature } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  URLS: {[key: string]: string} = {
    "alerts":"http://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement", 
    "tornadoes":"http://api.weather.gov/alerts?event=Tornado%20Warning"
  }

  constructor(private httpClient: HttpClient) { }
// function filterFeatures(feat) {
//   if (feat.event === SWS.text) {
//     return feat.description.includes('thunderstorm')
//   }
//   return true;
// }

// function processFeatures(features) {
//   features.map(f => new Feature(f))
//     .filter(filterFeatures)
//     .sort((a,b) => a.priority - b.priority)
//     .forEach(addCard)
// }

// let downloadAlertFeed = async function() {
//   fetch(ALERTS_URL, {'method': 'GET', 'headers': {'Accept': 'application/geo+json'}})
//     .then(response => response.json())
//     .then( data => processFeatures(data.features))
// }

  getAlerts(): Promise<Alert[]> {

      console.log('loading...')
      return new Promise<Alert[]>((resolve, reject) => {
        chrome.storage.local.get(['source'])
          .then((result: { [key: string]: string }) => {
            console.log("Current source is: " + result['source'])

            fetch(this.URLS[result['source']], { 'method': 'GET', 'headers': { 'Accept': 'application/geo+json' } })
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
                  .sort((a,b) => a.priority() - b.priority())
                )

              })
          })
      })

  }

}