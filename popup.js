
const ALERTS_URL = "https://api.weather.gov/alerts/active?status=actual"
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
    this.windGust = 0;
    if ('maxWindGust' in props.parameters) {
      this.windGust = props.parameters.maxWindGust[0]
    }
    this.hailSize = 0;
    if ('maxHailSize' in props.parameters) {
      this.hailSize = props.parameters.maxHailSize[0]
    }
    this.sender = feature.properties.senderName
    this.priority = FILTER.indexOf(this.event)
  }
}

function processFeatures(features) {
  features.filter((e) => FILTER.includes(e.properties.event))
    .map(f => new Feature(f))
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
  // downloadFeed();
  downloadAlertFeed();
})
