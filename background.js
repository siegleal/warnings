chrome.runtime.onInstalled.addListener(async () => {
  console.log('installing');
  chrome.storage.local.set({"source": "active"}, () => {
      console.log("Set source to 'active'")
    })
  chrome.storage.local.set({"file": "json_data/pds.json"}, () => {
      console.log("Set file to 'pds.json'")
    })
  chrome.storage.local.set({"types": "Tornado%20Warning,Severe%20Thunderstorm%20Warning,Special%20Weather%20Statement"}, () => {
      console.log("Set default types")
    })
  chrome.alarms.onAlarm.addListener(onAlarm)
  // await chrome.alarms.create('updateWarnings', {when: Date.now(), periodInMinutes: 0.5})
})

function onAlarm(alarm) {
  if (alarm.name === 'updateWarnings') {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "exclamation.png",
      title: "New Tornado Warning",
      message: "A new Tornado Warning has been issued"
    })
  }
}