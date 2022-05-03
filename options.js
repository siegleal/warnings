window.addEventListener('DOMContentLoaded', (event) => {
  chrome.storage.local.get(['source', 'file'])
    .then(result => {
      const source = result['source']
      const file = result['file'];
      console.log('File: ', file)
      $('#source').val(source)
      showFiles(source === 'file')
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

function showFiles(shouldShow) {
  if (shouldShow) {
    $('#radioContainer').removeClass('hidden')
  } else {
    $('#radioContainer').addClass('hidden')
  }
}

$('#source').on('change', (event) => {
  if ($('#source').val() === 'file') {
    console.log('show files')
    showFiles(true)
  } else {
    console.log('hide files')
    showFiles(false)
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

$('#save').click(function(event) {
  $('#output').text('').removeClass('error')
  let source = $('#source').val();
  let file = $('input[name=file_select]:checked').val();
  if ( source === 'file' && file === undefined){
    $('#output').addClass('error').text('Error: file is not set')
    return
  }
  chrome.storage.local.set({ 'source': source, 'file': file}, () => {
    console.log('Source is set to: ' + source);
    console.log('file is set to: ' + file);
    $('#output').text('Saved!');
    setTimeout(() => $('#output').text(''), 2000);
  })
})