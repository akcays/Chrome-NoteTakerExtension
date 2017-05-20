chrome.storage.local.get('changes', function(results) {
  console.log(results.changes);
  var changes = results.changes;

  changes.textToUnhighlight.forEach((value) => {
    $('body').unhighlight(value, {className: `highlight-${value.color}`});
  });

  changes.textToHighlight.forEach((value) => {
    $('body').highlight(value.note, {className: `highlight-${value.color}`});
  });

  chrome.storage.local.remove('changes');
});