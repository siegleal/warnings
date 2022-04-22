export class EventType {
  text: string
  cssClass: string
  priority: Number

  constructor(text: string, cssClass: string, pri: Number){
    this.text = text;
    this.cssClass = cssClass;
    this.priority = pri
  }

  static fromCaps(capsFeature: any){
    switch(capsFeature.properties.event){
      case "Tornado Warning":
        return new EventType("Tornado Warning", "tor", 2);
      case "Severe Thunderstorm Warning":
        return new EventType("Severe Thunderstorm Warning", "svr", 1);
      case "Special Weather Statement":
        return new EventType("Special Weather Statement", "spec", 0);
      default:
        return new EventType("Other", "", -1);
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
  windGust: Number
  hailSize: Number
  tornadoDetection: string
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
      this.windGust = props.parameters.maxWindGust[0].slice(0,-4)
    }
    this.hailSize = 0;
    if ('maxHailSize' in props.parameters) {
      this.hailSize = props.parameters.maxHailSize[0].slice(0, -2)
    }
    this.tornadoDetection = ''
    if ('tornadoDetection' in props.parameters) {
      this.tornadoDetection = props.parameters.tornadoDetection[0]
    }
    this.thunderstormDamageThreat = ''
    if ('thunderstormDamageThreat' in props.parameters) {
      this.thunderstormDamageThreat = props.parameters.thunderstormDamageThreat[0]
    }
  }
}