import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapService } from './cap.service';
import { Alert, Entry, AlertsApi, AlertClass, Update, AlertStatus } from '../utils';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warnings-ng';
  alerts: Alert[]
  loaded: boolean = false;
  isLive: boolean = true;
  classes: AlertClass[] = [
    AlertClass.SWS,
    AlertClass.SVR,
    AlertClass.SVRCON,
    AlertClass.SVRDES,
    AlertClass.TORRDR,
    AlertClass.TOROBS,
    AlertClass.TORPDS,
    AlertClass.TORE
  ]

  constructor(private capService: CapService /*LocalgoService*/) {
    this.alerts = []
  }

  toggleHidden(element: ElementRef): void {
    if (element.nativeElement.classList.contains('hidden')){
      element.nativeElement.classList.remove('hidden')
    } else {
      element.nativeElement.classList.add('hidden')
    }
  }

  ngOnInit(): void {
    chrome.storage.local.get({'update': <Update> {source: "onLoad", period: 5}})
      .then((updateResult: {[key: string]: any}) => {
        let update = <Update>updateResult['update']
        console.log('Update data: %s', JSON.stringify(update))
      })
    chrome.storage.local.get({'active': true})
      .then((result: { [key: string]: any }) => {
        this.isLive = result['active'];
      })
      .then(() => this.fetchToStorage())
      .then(() => this.updateFromStorage())
      .then(() => this.loaded = true)
  }

  clearStorage(): void {
    chrome.storage.local.remove('alerts').then(() => console.log('Removed alerts'))
  }

  fetchToStorage(): Promise<void> {
    return this.capService.getAlerts()
      .then(this.capService.storeAlerts)
  }

  updateFromStorage(): Promise<void> {
    this.alerts = [];
    return chrome.storage.local.get({'alerts': []})
      .then((result: { [key: string]: any }) => {
        this.alerts = <Alert[]>result['alerts'];
        const newAlerts = this.alerts.filter((a: Alert) => a.status === AlertStatus.NEW)
        console.log('New Alerts: %s', JSON.stringify(newAlerts))
        if (newAlerts.length > 0) {
          chrome.storage.local.get({ "notifications": false })
            .then((result) => {
            if (result['notifications']) {
              chrome.notifications.create({
                type: "basic",
                iconUrl: "exclamation.png",
                title: "New Alert",
                message: "- TEST -"
              })
            }})}})
  }
}