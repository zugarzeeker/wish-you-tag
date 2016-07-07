var textTag = document.getElementById('text-tag');
var textInput = document.getElementById('textInput');

function generateTag(text) {
  return text;
}

function renderText(text) {
  textTag.innerHTML = generateTag(text);
}

function handleChange(event) {
  renderText(generateTag(textInput.value));
}
