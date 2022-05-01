chrome.runtime.onInstalled.addListener(() => {
  console.log('installing');
  chrome.storage.local.set({"source": "file"}, () => {
      console.log("Set source to 'active'")
    })
  chrome.storage.local.set({"file": "json_data/pds.json"}, () => {
      console.log("Set file to 'pds.json'")
    })
})