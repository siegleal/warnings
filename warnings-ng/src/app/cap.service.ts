import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, filter, tap, switchMap } from 'rxjs/operators'
import { Alert, AlertsApi, EventType, Feature } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  ALERTS_URL: string = "https://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement"

  constructor(private httpClient: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.httpClient.get<AlertsApi>(this.ALERTS_URL)
      .pipe(
        map((res:AlertsApi) => res.features.map(feature => new Alert(feature))
        // switchMap<Feature[], Observable<Feature>>(featuresArray => from(featuresArray)),
        // map((feature: Feature) => new Alert(feature)),
        .filter((alert, _) => {
          if (alert.eventType === EventType.TOR || alert.eventType === EventType.SVR) {
            return true;
          }
          if (alert.eventType == EventType.SWS && alert.description.includes('thunderstorm')) {
            return true;
          }
          return false;
        })))
        // )
  }
}


