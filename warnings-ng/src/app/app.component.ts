import { Component } from '@angular/core';
import { CapService } from './cap.service';
import { Alert } from '../utils';
import { map } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'warnings-ng';
  alerts: Alert[]

  constructor(private capService: CapService) {
    this.alerts = []
  }


  ngOnInit(): void {
    this.capService.getAlerts()
      .pipe(map(alerts => alerts.sort((a,b) => b.priority() - a.priority())))
      .subscribe(alerts => this.alerts = alerts)
  }
}
