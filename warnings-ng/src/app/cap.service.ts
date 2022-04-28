import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Alert, AlertsApi, EventType, Feature } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  URLS = {
    "alerts":"https://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement", 
    "tornadoes":"https://api.weather.gov/alerts?event=Tornado%20Warning"
  }

  constructor(private httpClient: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    console.log('loading...')
    chrome.storage.local.get(['source'])
      .then((result: any) => {
        console.log("Current sourse is: " + result['source'])
      })
    return of()

    // return new Observable<Alert[]>((subscriber) => {
    //   let source = this.ALERTS_URL;
    //   chrome.storage.local.get(['source'], (result: any) => {
    //     console.log('Source is ' + result['source'])
    //     if (result['source'] === 'tornadoes') {
    //       source = this.TORNADOS_ONLY
    //     }
    //     this.httpClient.get<AlertsApi>(source)
    //       .pipe(
    //         map((res: AlertsApi) => res.features.map(feature => new Alert(feature))
    //           .filter((alert, _) => {
    //             if (alert.eventType === EventType.TOR || alert.eventType === EventType.SVR) {
    //               return true;
    //             }
    //             if (alert.eventType == EventType.SWS && alert.description.includes('thunderstorm')) {
    //               return true;
    //             }
    //             return false;
    //           }))).subscribe((alerts) => {
    //             console.log('alerts: ' + JSON.stringify(alerts));
    //             subscriber.next(alerts);
    //             subscriber.complete();
    //           })

    //   })
    // })

    // return this.httpClient.get<AlertsApi>(this.ALERTS_URL)
    //   .pipe(
    //     map((res: AlertsApi) => res.features.map(feature => new Alert(feature))
    //       .filter((alert, _) => {
    //         if (alert.eventType === EventType.TOR || alert.eventType === EventType.SVR) {
    //           return true;
    //         }
    //         if (alert.eventType == EventType.SWS && alert.description.includes('thunderstorm')) {
    //           return true;
    //         }
    //         return false;
    //       })))
  }

}