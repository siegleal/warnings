import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapService } from './cap.service';
import { Alert, Entry, AlertsApi, AlertClass } from '../utils';
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
  @ViewChild('counts') counts!: ElementRef<HTMLDivElement>;
  @ViewChild('plus') plus!: ElementRef<HTMLDivElement>;
  @ViewChild('minus') minus!: ElementRef<HTMLDivElement>;
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

  saveButton(): void {
    this.capService.getLastJson()
      .catch((reason) => console.log(reason))
      .then((json: void | AlertsApi) => {
        let jsonString = JSON.stringify(json)
        let blob = new Blob([jsonString], {type:"application/json;charset=utf-8"})
        let now = new Date()
        saveAs(blob, `${now.getFullYear()}-${now.getMonth()}-${now.getDay()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.json`)
      })
  }

  showCounts(): void {
    this.toggleHidden(this.counts)
    this.toggleHidden(this.plus)
    this.toggleHidden(this.minus)
  }

  getCounts(){
    let arr: Entry[] = [];
    this.classes.forEach(x => {
      // arr.push(new Entry(x, this.alerts.filter(y => y.getClassification() === x).length))
      arr.push(new Entry(x, this.alerts.filter(y => y.alertClass === x).length))
    })
    return arr;
  }

  ngOnInit(): void {
    chrome.storage.local.get(['active'])
      .then((result: { [key: string]: string }) => {
        this.isLive = result['active'] === undefined ? true : Boolean(result['active']);
        this.capService.getAlerts()
          .then((alerts: Alert[]) => {
            this.alerts = alerts;
            this.loaded = true;
            return this.capService.storeAlerts(alerts);
          })
      })
  }
}