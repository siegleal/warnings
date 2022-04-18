
const URL = `https://alerts.weather.gov/cap/us.php?x=0`
const FILTER = [
  "Special Weather Statement",
  "Tornado Warning",
  "Severe Thunderstorm Warning"
]

let parseXML = function(xml) {
  xml = xml.replaceAll('cap:', "cap_")
  console.log(xml);
  var xml =$( $.parseXML(xml) );
  xml.find("entry")
    .filter( (index, element) => {
      return FILTER.includes($(element).find('cap_event').text());
    })
    .each(function() {
    let title = $(this).find('title').text();
    let summary = $(this).find('summary').text();
    let capEvent = $(this).find('cap_event').text();
    let newElem = $("<div></div>");
    newElem.addClass('item');
    newElem.addClass(getClass(capEvent));
    let anchor = $('<a></a>').attr('href', $(this).find('id').text()).attr('target', "_blank");
    newElem.append(anchor.append($('<span></span>').addClass('title').addClass('bold').text(capEvent)))
    newElem.append($('<span></span>').text(summary))
    $('#events').append(newElem)
    
  })

}

function getClass(event) {
  switch (event) {
    case FILTER[0]:
      return "spec";
    case FILTER[1]:
      return "tor";
    case FILTER[2]:
      return "svr"
    default:
      return ""
  }
}

let downloadFeed = async function(){
  await fetch(URL)
    .then(response => response.text())
    .then(str => {
      parseXML(str)
    })

}

document.addEventListener("DOMContentLoaded", function() {
  console.log('downloading feed');
  downloadFeed();
})

chrome.runtime.onStartup.addListener(() => {
  downloadFeed()
})


chrome.runtime.onInstalled.addListener(() => {
  downloadFeed()
})
