import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Alert } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class CapService {
  ALERTS_URL: string = "https://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement"

  constructor(private httpClient: HttpClient) { }

  getAlerts(): Observable<Alert[]> {
    return this.httpClient.get(this.ALERTS_URL)
      .pipe(
        map((res: any) => res.features.map((feature: any) => new Alert(feature))))
  }
}
