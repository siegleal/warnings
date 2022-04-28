window.addEventListener('DOMContentLoaded', (event) => {
  console.log($('#source').val())
})

$('#save').click(function(event) {
  let value = $('#source').val();
  chrome.storage.local.set({ 'source': value }, () => {
    console.log('Source is set to: ' + value);
  })
})