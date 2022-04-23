import { Component, OnInit, ViewChild } from '@angular/core';
import { Alert, EventType } from '../../utils';
import { Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert-card[alert]',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
   @Input() alert!: Alert;
   @ViewChild('desc') descDiv!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    console.log(this.alert)
  }

  shouldDisplayHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.windGust > 0 || 
        this.alert.hailSize > 0))
  }

  shouldDisplaySvrHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.thunderstormDamageThreat.length > 0))
  }

  shouldDisplayTorHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.tornadoDetection.length > 0))
  }

  toggleDescription(): void {
    if (this.descDiv.nativeElement.classList.contains('hidden')) {
      this.descDiv.nativeElement.classList.remove('hidden')
    } else {
      this.descDiv.nativeElement.classList.add('hidden')
    }

  }

  getTorDetectionClass(): string {
    if (this.alert.eventType === EventType.SVR) {
      return "red";
    }
    return "";
  }
}
