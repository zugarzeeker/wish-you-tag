var textTag = document.getElementById('text-tag');
var textInput = document.getElementById('textInput');
var resultText = "";

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

function renderText() {
  textTag.innerHTML = resultText;
}

function handleChange(event) {
  resultText = generateTag(textInput.value);
  renderText();
}

textInput.value = "ขอ ให้ มาเล่น กัน เยอะๆ นะครับ . . .";
resultText = generateTag(textInput.value);
renderText();
