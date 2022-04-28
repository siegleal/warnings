chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({"source": "active"}, () ={console.log('setting source to active')})
})