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

  constructor(feature: any) {
    let props = feature.properties;
    this.event = props.event;
    this.eventType = EventType.fromCaps(feature)
    this.description = props.description;
    this.areaDesc = props.areaDesc;
    this.effective = new Date(props.effective)
    this.expires = new Date(props.expires)
    this.sender = props.senderName
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

  priority(): number {
    //https://www.weather.gov/media/alert/CAP_v12_guide_05-16-2017.pdf
    let current = this.eventType.priority
    if (this.thunderstormDamageThreat.length > 0){
      switch (this.thunderstormDamageThreat){
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
          current += .1
          break;
        case "RADAR INDICATED":
          current += .2
          break;
        case "OBSERVED":
          current += .2
          break;
        default:
          break;
      }
    }

    return current
  }
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