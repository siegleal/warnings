import { Component, OnInit, ViewChild } from '@angular/core';
import { Alert, EventType, Point } from '../../utils';
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

  drawCanvas(): void {
    let ctx: CanvasRenderingContext2D | null = this.polyCanvas.nativeElement.getContext('2d');
    if (ctx === null){
      return
    }
    console.log('Drawing')
    console.log('Polygon: ' + JSON.stringify(this.alert.polygon))
    let adjusted = Point.adjustArray(this.alert.polygon);
    console.log(adjusted)
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(0,0,this.polyCanvas.nativeElement.width, this.polyCanvas.nativeElement.height)
    // ctx.fillStyle = '#f00';
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
    // ctx.fill();
    ctx.stroke();
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
    if (this.hiddenContainer.nativeElement.classList.contains('hidden')) {
      this.hiddenContainer.nativeElement.classList.remove('hidden')
    } else {
      this.hiddenContainer.nativeElement.classList.add('hidden')
    }
  }

  getClass(): string {
    return this.alert.getClass()
  }

  getTorDetectionClass(): string {
    if (this.alert.eventType === EventType.SVR) {
      return "red";
    }
    return "";
  }
}
