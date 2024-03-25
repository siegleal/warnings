import { Component, OnInit, ViewChild } from '@angular/core';
import { Alert, AlertStatus, EventType, Point } from '../../utils';
import { Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert-card[alert]',
  templateUrl: './alert-card.component.html',
  styleUrls: ['./alert-card.component.css']
})
export class AlertCardComponent implements OnInit {
   @Input() alert!: Alert;
   @ViewChild('hiddencontainer') hiddenContainer!: ElementRef<HTMLDivElement>;
   @ViewChild('poly') polyCanvas!: ElementRef<HTMLCanvasElement>;


  ngAfterViewInit(): void {
    this.drawCanvas()
  }
  ngOnInit(): void {
    
  }

  getTitle(): string {
    return this.alert.event;
  }

  timeUntilExpiration(): number {
    const now: number = (new Date).getTime();
    const diff = new Date(this.alert.expires).getTime() - now;
    return Math.round(diff / 1000 / 60);
  }

  getStatusString(): string {
    switch (this.alert.status) {
      case AlertStatus.NEW:
        return "New";
      case AlertStatus.EXISTING:
        return "Existing";
      case AlertStatus.UPGRADED:
        return "Upgraded";
      case AlertStatus.UNKNOWN:
        return "";
    }
  }

  drawCanvas(): void {
    if (this.polyCanvas === undefined) {
      console.warn("Polygon canvas was undefined")
      return 
    }
    let ctx: CanvasRenderingContext2D | null = this.polyCanvas.nativeElement.getContext('2d');
    if (ctx === null){
      return
    }
    if (this.alert.polygon.length == 0) {
      return 
    }
    let adjusted = Point.adjustArray(this.alert.polygon);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.transform(1, 0, 0, -1, 0, this.polyCanvas.nativeElement.height)
    ctx.beginPath();
    let current: Point = adjusted[0]
    ctx.moveTo(current.x, current.y)
    for(let index = 1; index < adjusted.length; index++){
      current = adjusted[index]
      ctx.lineTo(current.x, current.y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  shouldDisplayHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.windGust > 0 ||
        this.alert.hailSize > 0))
  }

  shouldDisplaySvrHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.thunderstormDamage.length > 0))
  }

  shouldDisplayTorHazards(): boolean {
    return (this.alert !== undefined &&
      (this.alert.tornadoDetection.length > 0))
  }

  toggleDescription(): void {
    if (this.hiddenContainer.nativeElement.classList.contains('hidden')) {
      this.hiddenContainer.nativeElement.classList.remove('hidden')
    } else {
      this.hiddenContainer.nativeElement.classList.add('hidden')
    }
  }

  getClass(): string {
    return this.alert.alertClass.name.toLowerCase();
  }

  getTorDetectionClass(): string {
    if (this.alert.eventType === EventType.SVR) {
      return "red";
    }
    return "";
  }
}
