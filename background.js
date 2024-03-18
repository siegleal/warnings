chrome.runtime.onInstalled.addListener(async () => {
  console.log('installing');
  chrome.storage.local.set({"source": "active"}, () => {
      console.log("Set source to 'active'")
    })
  chrome.storage.local.set({"file": "json_data/pds.json"}, () => {
      console.log("Set file to 'pds.json'")
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