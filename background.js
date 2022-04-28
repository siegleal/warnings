chrome.runtime.onInstalled.addListener(() => {
  console.log('installing');
  chrome.storage.local.set({"source": "active"}, () => {
      console.log("Set source to 'active'")
    })
})