window.addEventListener('DOMContentLoaded', (event) => {
  chrome.storage.local.get(['notifications', 'types', 'active', 'update'])
    .then(result => {
      const notifications = result['notifications'];
      const checkedTypesArr = result['types'] === undefined ? [] : result['types'].split(',')
      const active = result['active'] === undefined ? true : result['active']
      const update = result['update']
      checkedTypesArr.forEach((val, index, arr) => {
        $(`input[value="${val}"]`).prop('checked', true);
      })

      $('#notificationsOn').prop("checked", notifications)
      $('#active').prop("checked", active)
      $('#updateSelect').val(update.source)
      $('#updatePeriod').val(update.period)
    })
})


$('#notificationsOn').on('change', () => {

  let isOn = $('#notificationsOn').prop("checked");
  if (isOn) {
    console.log('Notifications are on')
  } else {
    console.log('Notifications are off')
  }
})

function getCheckedTypes() {
  const checkedTypes = []
  $("input.typeCheck:checked").each((index, el) => {
    checkedTypes.push(el.value)
  })
  return checkedTypes.join(',')
}

$('#sendNotification').click( function(event) {
  chrome.notifications.create({
    type: "basic",
    iconUrl: "exclamation.png",
    title: "New Tornado Warning",
    message: "- TEST - A new Tornado Warning has been issued"
  }) 
})

$('#save').click(function(event) {
  $('#output').text('').removeClass('error')
  let file = $('input[name=file_select]:checked').val();
  let checkedTypes = getCheckedTypes()
  let active = $('input#active').prop('checked')
  let notifications = $('#notificationsOn').prop("checked");
  let updateSource = $('#updateSelect').val()
  let updatePeriod = $('#updatePeriod').val()
  let update = {source: updateSource, period: updatePeriod}
  chrome.storage.local.set({ 
    'file': file,
    'notifications': notifications,
    'types': checkedTypes,
    'active': active,
    'update': update
  }, () => {
    console.log('file is set to: ' + file);
    console.log('notifications is set to: ' + notifications);
    console.log('types is set to: ' + checkedTypes);
    console.log('active is set to: ' + active);
    console.log('update is set to: ' + JSON.stringify(update));
    $('#output').text('Saved!');
    setTimeout(() => $('#output').text(''), 2000);
  })
})

$('#aux').click(function(event) {
  console.log($('#updateSelect').val());
  console.log($('#updatePeriod').val());
})