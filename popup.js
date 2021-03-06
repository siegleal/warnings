
const ALERTS_URL = "https://api.weather.gov/alerts/active?status=actual&event=Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement"
// https://www.weather.gov/documentation/services-web-api#/default/alerts_active
// https://alerts.weather.gov/cap/pdf/CAP%20v12%20guide%20web%2006052013.pdf

const TOR = {
  priority: 0,
  text : "Tornado Warning",
  class: "tor"
}
const SVR = {
  priority : 1,
  text : "Severe Thunderstorm Warning",
  class: "svr"
}
const SWS = {
  priority : 2,
  text : "Special Weather Statement",
  class: "spec"
}
const FILTER = [TOR, SVR, SWS].map(e => e.text)

class Tag {
  constructor(searchText, tagName){
    this.searchText = searchText;
    this.tag = tagName;
  }
}

function getClass(event) {
  switch (event) {
    case TOR.text:
      return "tor";
    case SVR.text:
      return "svr"
    case SWS.text:
      return "spec";
    default:
      return ""
  }
}

function addCard(feature) {
  let newElem = $("<div></div>");
  newElem.addClass('item');
  newElem.addClass(getClass(feature.event));
  let anchor = $('<a></a>').attr('href', feature.link).attr('target', "_blank");
  newElem.append(anchor.append($('<span></span>').addClass('title').addClass('bold').text(feature.event)))
  newElem.append($('<span></span>').text('Area: ' + feature.areaDesc))

  if (feature.hailSize > 0 || feature.windGust > 0) {
    newElem.append($('<span></span>').text('Wind Gust: ' + feature.windGust + ' Hail size: ' + feature.hailSize))
  }
  newElem.append($('<span></span>').text('Thunderstorm Damage: ' + feature.thunderstormDamageThreat))

  newElem.append($('<span></span>').text('Effective: ' + feature.effective.toLocaleString()))
  newElem.append($('<span></span>').text('Expires: ' + feature.expires.toLocaleString()))
  newElem.append($('<span></span>').addClass('desc').text(feature.description))
  $('#events').append(newElem)
}

class Feature {
  constructor(feature) {
    console.log(feature)
    let props = feature.properties;
    this.event = feature.properties.event;
    this.description = feature.properties.description;
    this.areaDesc = feature.properties.areaDesc;
    this.effective = new Date(feature.properties.effective)
    this.expires = new Date(feature.properties.expires)
    this.sender = feature.properties.senderName
    this.priority = FILTER.indexOf(this.event)
    this.windGust = 0;
    if ('maxWindGust' in props.parameters) {
      this.windGust = props.parameters.maxWindGust[0]
    }
    this.hailSize = 0;
    if ('maxHailSize' in props.parameters) {
      this.hailSize = props.parameters.maxHailSize[0]
    }
    this.tornadoDetection = 'None'
    if ('tornadoDetection' in props.parameters) {
      this.tornadoDetection = props.parameters.tornadoDetection[0]
    }
    this.thunderstormDamageThreat = 'None'
    if ('thunderstormDamageThreat' in props.parameters) {
      this.thunderstormDamageThreat = props.parameters.thunderstormDamageThreat[0]
    }
  }
}

function filterFeatures(feat) {
  if (feat.event === SWS.text) {
    return feat.description.includes('thunderstorm')
  }
  return true;
}

function processFeatures(features) {
  features.map(f => new Feature(f))
    .filter(filterFeatures)
    .sort((a,b) => a.priority - b.priority)
    .forEach(addCard)
}

let downloadAlertFeed = async function() {
  fetch(ALERTS_URL, {'method': 'GET', 'headers': {'Accept': 'application/geo+json'}})
    .then(response => response.json())
    .then( data => processFeatures(data.features))
}

document.addEventListener("DOMContentLoaded", function() {
  console.log('downloading feed');
  downloadAlertFeed();
})
