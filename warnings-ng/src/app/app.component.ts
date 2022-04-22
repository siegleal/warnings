import { Component } from '@angular/core';
import { CapService } from './cap.service';
import { Alert } from '../utils';

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
    this.capService.getAlerts().subscribe(alertArr => this.alerts = alertArr)
  }
}
