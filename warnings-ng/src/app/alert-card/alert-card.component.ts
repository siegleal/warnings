import { Component, OnInit } from '@angular/core';
import { Alert } from '../../utils';
import { Input } from '@angular/core';

@Component({
  selector: 'app-alert-card[alert]',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
   @Input() alert: Alert;

  ngOnInit(): void {
  }

}
