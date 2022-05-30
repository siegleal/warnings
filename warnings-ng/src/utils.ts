export class EventType {
  text: string
  cssClass: string
  priority: number

  constructor(text: string, cssClass: string, pri: number){
    this.text = text;
    this.cssClass = cssClass;
    this.priority = pri
  }

  static TOR: EventType =
        new EventType("Tornado Warning", "tor", 2);
  static SVR: EventType =
        new EventType("Severe Thunderstorm Warning", "svr", 1);
  static SWS: EventType =
        new EventType("Special Weather Statement", "spec", 0);
  static OTHER: EventType =
        new EventType("Other", "", -1);

  static fromCaps(capsFeature: any){
    switch(capsFeature.properties.event){
      case this.TOR.text:
        return this.TOR;
      case this.SVR.text:
        return this.SVR;
      case this.SWS.text:
        return this.SWS;
      default:
        return this.OTHER;
    }
    
  }
}

export class BoundingRectangle {
  minX: number = 0;
  minY: number = 0;
  maxX: number = 0;
  maxY: number = 0;
}

export class Point {
  x: number
  y: number

  constructor(arr: number[]){
    this.x = arr[0]
    this.y = arr[1]
  }

  static fromFeature(feature: any): Point[] {
    if (feature.geometry === null || feature.geometry.coordinates === null){
      return [];
    }
    console.log('Coordinates: ' + JSON.stringify(feature.geometry.coordinates))
    console.log('Coordinates inner: ' + JSON.stringify(feature.geometry.coordinates[0]))
    return feature.geometry.coordinates[0].map((coord: any) => new Point(coord))
  }

  static getBoundingRectangle(arr: Point[]): BoundingRectangle {
    let result: BoundingRectangle = new BoundingRectangle();
    result.minX = Math.min(...arr.map(e => e.x))
    result.minY = Math.min(...arr.map(e => e.y))
    result.maxX = Math.max(...arr.map(e => e.x))
    result.maxY = Math.max(...arr.map(e => e.y))
    return result;
  }

  static adjustArray(arr: Point[]): Point[]{
    let boundingRect: BoundingRectangle = Point.getBoundingRectangle(arr);
    let longestDiff = Math.max(boundingRect.maxX-boundingRect.minX, boundingRect.maxY - boundingRect.minY)
    console.log('Longest diff: ' + longestDiff);
    let factor = longestDiff / 50.0 * 100.0;
    console.log('Factor: ' + factor);
    return arr.map(p => new Point([Math.floor((p.x - boundingRect.minX) * 100.0 / factor), Math.floor((p.y - boundingRect.minY) * 100.0 / factor)]));
  }
}

export class Alert {
  event: string
  description: string
  areaDesc: string
  effective: Date
  expires: Date
  sender: string
  windGust: number
  hailSize: number
  tornadoDetection: string
  tornadoDamageThreat: string
  thunderstormDamageThreat: string
  eventType: EventType
  polygon: Point[]

  constructor(feature: Feature) {
    let props = feature.properties;
    this.event = props.event;
    this.eventType = EventType.fromCaps(feature)
    this.description = props.description || "";
    this.areaDesc = props.areaDesc;
    this.effective = new Date(props.effective)
    this.expires = new Date(props.expires)
    this.sender = props.senderName
    this.polygon = Point.fromFeature(feature)

    this.windGust = 0;
    if ('maxWindGust' in props.parameters) {
      this.windGust = props.parameters.maxWindGust[0].slice(0,-4).replace('Up to', '')
    }
    this.hailSize = 0;
    if ('maxHailSize' in props.parameters) {
      this.hailSize = props.parameters.maxHailSize[0]
    }
    this.tornadoDetection = ''
    if ('tornadoDetection' in props.parameters) {
      this.tornadoDetection = props.parameters.tornadoDetection[0]
    }
    this.thunderstormDamageThreat = ''
    if ('thunderstormDamageThreat' in props.parameters) {
      this.thunderstormDamageThreat = props.parameters.thunderstormDamageThreat[0]
    }
    this.tornadoDamageThreat = ''
    if ('tornadoDamageThreat' in props.parameters) {
      this.tornadoDamageThreat = props.parameters.tornadoDamageThreat[0]
    }
  }
  getClassification(): Classification {
    switch (this.eventType) {
      case EventType.SWS:
        return Classification.SWS;
      case EventType.SVR:
        switch (this.thunderstormDamageThreat) {
          case "CONSIDERABLE":
            return Classification.SVRCON;
          case "DESTRUCTIVE":
            return Classification.SVRDES;
          default:
            return Classification.SVR;
        }
      case EventType.TOR:
        if ( this.description && this.description.toLowerCase().includes('tornado emergency')){
            return Classification.TORE;
        }
        if (this.description && this.description.toLowerCase().includes('particularly dangerous situation')){
            return Classification.TORPDS;
        }
        if (this.tornadoDamageThreat === "CATASTROPHIC") {
            return Classification.TORCAT;
        }
        if (this.tornadoDamageThreat === "CONSIDERABLE") {
            return Classification.TORCON;
        }
        if (this.tornadoDetection === "OBSERVED") {
            return Classification.TOROBS;
        }
            return Classification.TORRDR;
      default:
        console.log("Could not classify alert: " + this)
        return Classification.UNKNOWN;
    }
  }

  timeUntilExpiration(): number {
    const now: number = (new Date).getTime();
    const diff = this.expires.getTime() - now;
    return Math.round(diff / 1000 / 60);
  }

  priority(): number {
    //https://www.weather.gov/media/alert/CAP_v12_guide_05-16-2017.pdf
    let current = this.eventType.priority
    if (this.thunderstormDamageThreat.length > 0) {
      switch (this.thunderstormDamageThreat) {
        case "CONSIDERABLE":
          current += .1
          break;
        case "DESTRUCTIVE":
          current += .2
          break;
        default:
          break;
      }
    }
    //TOR only
    if (this.tornadoDamageThreat.length > 0){
      switch (this.tornadoDamageThreat){
        case "CONSIDERABLE":
          current += .1
          break;
        case "CATASTRPHIC":
          current += .2
          break;
        default:
          break;
      }
    }
    // possible on SVR
    if (this.tornadoDetection.length > 0){
      switch (this.tornadoDetection){
        case "POSSIBLE":
          current += .05
          break;
        case "RADAR INDICATED":
          current += .2
          break;
        case "OBSERVED":
          current += .3
          break;
        default:
          break;
      }
    }

    return current
  }
}


export class Classification {
  static readonly TORE =   new Classification('tor-emergency', 'Tornado Warning','TORNADO EMERGENCY');
  static readonly TORPDS = new Classification('tor-pds','Tornado Warning', 'PDS');
  static readonly TORCAT = new Classification('tor-catastrophic','Tornado Warning', 'Catastrophic');
  static readonly TORCON = new Classification('tor-considerable','Tornado Warning', 'Considerable');
  static readonly TOROBS = new Classification('tor-observed','Tornado Warning', 'Observed');
  static readonly TORRDR = new Classification('tor-radar', 'Tornado Warning','Radar Indicated');
  static readonly SVRDES = new Classification('svr-destructive', 'Severe Thunderstorm Warning','Destructive');
  static readonly SVRCON = new Classification('svr-considerable', 'Severe Thunderstorm Warning','Considerable');
  static readonly SVR =    new Classification('svr', 'Severe Thunderstorm Warning');
  static readonly SWS =    new Classification('sws', 'Special Weather Statement');
  static readonly UNKNOWN =    new Classification('', 'Unknown Event');


  constructor(readonly css_class: string, readonly title: string, readonly modifier: string = '') {}

}

export interface Feature {
  id: string
  type: string
  geometry: Geometry
  properties: Properties

}

export interface AlertsApi {
  type: string
  features: any[]
  title: string
  updated: string
}

interface Geometry {
  type: string
  coordinates: any //dont care
}

interface Properties {
  id: string
  areaDesc: string
  geocode: any
  affectedZones: string[]
  references: string[]
  sent: string
  effective: string
  onset: string
  expires: string
  ends: string
  status: string
  messageType: string
  category: string
  severity: string
  certainty: string
  urgency: string
  event: string
  sender: string
  senderName: string
  headline: string
  description: string
  instruction: string
  response: string
  parameters: any
}

export class Entry {
  cls: Classification;
  count: number;

  constructor(cls: Classification, count: number) {
    this.cls = cls;
    this.count = count;
  }
}