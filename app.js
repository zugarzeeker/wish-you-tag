var textTag = document.getElementById('text-tag');
var textInput = document.getElementById('textInput');

function generateTag(text) {
  var t = text.split(' ');
  var s = [];
  s.push('┏┷ ┓');
  for (var i = 0, len = t.length; i < len; i++) {
    s.push('┃ ??? ┃'.replace('???', t[i]));
  }
  s.push('┗━ ┛');
  console.log(s);
  return s.join('<br>');
}

function renderText(text) {
  textTag.innerHTML = text;
}

function handleChange(event) {
  renderText(generateTag(textInput.value));
}

textInput.value = "ขอ ให้ มาเล่น กัน เยอะๆ นะครับ . . .";
renderText(generateTag(textInput.value));
