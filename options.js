window.addEventListener('DOMContentLoaded', (event) => {
  chrome.storage.local.get(['file', 'notifications', 'types', 'active'])
    .then(result => {
      const file = result['file'];
      const notifications = result['notifications'];
      const checkedTypesArr = result['types'] === undefined ? [] : result['types'].split(',')
      const active = result['active'] === undefined ? true : result['active']
      checkedTypesArr.forEach((val, index, arr) => {
        $(`input[value="${val}"]`).prop('checked', true);
      })

      $('#notificationsOn').prop("checked", notifications)
      $('#active').prop("checked", active)
      chrome.runtime.getPackageDirectoryEntry((dirEntry) => {
        dirEntry.getDirectory('json_data', {}, (jsonDir) => {

          const reader = jsonDir.createReader();
          reader.readEntries((entries) => {
            entries.forEach(element => {
              addInput(element.name, file)
            });
          })
      })
    })
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

function addInput(filename, selectedFile) {
  const container = $('#radioContainer')
  const input = $('<input>').prop({
    name: 'file_select',
    id: filename,
    value: 'json_data/' + filename,
    type: 'radio',
    checked: selectedFile === 'json_data/'+filename
  })
  container.append(input)

  const label = $('<label></label>')
  label.for = filename
  label.text(filename)
  container.append(label)
  container.append($('</br>'))

}

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
  chrome.storage.local.set({ 
    'file': file,
    'notifications': notifications,
    'types': checkedTypes,
    'active': active
  }, () => {
    console.log('file is set to: ' + file);
    console.log('notifications is set to: ' + notifications);
    console.log('types is set to: ' + checkedTypes);
    console.log('active is set to: ' + active);
    $('#output').text('Saved!');
    setTimeout(() => $('#output').text(''), 2000);
  })
})