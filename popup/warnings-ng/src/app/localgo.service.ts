import { Injectable } from '@angular/core';
import { Alert, AlertsApi } from 'src/utils';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class LocalgoService {

  constructor() { }

  getAlerts(active: string = '', json: string|undefined = undefined): Promise<Alert[]> {
    return fetch('http://localhost:8080/alerts')
      .then(response => response.json())
  }

  getLastJson(): Promise<AlertsApi> {
    return new Promise((resolve, reject) => {
      reject()
    })
  }
}
