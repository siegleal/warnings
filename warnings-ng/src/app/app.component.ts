import { Component, ElementRef, ViewChild } from '@angular/core';
import { CapService } from './cap.service';
import { Alert, Entry } from '../utils';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warnings-ng';
  alerts: Alert[]
  @ViewChild('counts') counts!: ElementRef<HTMLDivElement>;
  @ViewChild('plus') plus!: ElementRef<HTMLDivElement>;
  @ViewChild('minus') minus!: ElementRef<HTMLDivElement>;
  classes: string[] = [
    'sws',
    'svr',
    'svr-considerable',
    'svr-destructive',
    'tor-radar',
    'tor-observed',
    'tor-considerable',
    'tor-catastrophic',
    'tor-pds',
    'tor-emergency',
  ]

  constructor(private capService: CapService) {
    this.alerts = []
  }

  toggleHidden(element: ElementRef): void {
    if (element.nativeElement.classList.contains('hidden')){
      element.nativeElement.classList.remove('hidden')
    } else {
      element.nativeElement.classList.add('hidden')
    }
  }

  showCounts(): void {
    this.toggleHidden(this.counts)
    this.toggleHidden(this.plus)
    this.toggleHidden(this.minus)
  }

  getCounts(){
    let arr: Entry[] = [];
    this.classes.forEach(x => {
      arr.push(new Entry(x, this.alerts.filter(y => y.getClass() === x).length))
    })
    return arr;
  }

  getCount(c: string) {
    return this.alerts.filter(x => x.getClass() === c).length
  }


  ngOnInit(): void {
    this.capService.getAlerts()
      .then((alerts: Alert[]) => this.alerts = alerts)
  }
}