(function () {

var names = ["Carlos", "John", "Ram", "Sita", "Jaidev", "Hector", "Omega", "akshat", "Goblin", "Jonathan"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();