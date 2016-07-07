var textTag = document.getElementById('text-tag');
var textInput = document.getElementById('textInput');
var resultText = "";

function getCredit() {
  var cr = ['', ''];
  cr.push('สร้างได้ที่: https://zugarzeeker.github.io/wish-you-tag/')
  return cr.join('\n');
}

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
  $("#noti").text("");
  resultText = generateTag(textInput.value);
  renderText();
}

textInput.value = "ขอ ให้ มาเล่น กัน เยอะๆ นะครับ . . .";
resultText = generateTag(textInput.value);
renderText();


var clipboard = new Clipboard('.btn', {
  text: function(trigger) {
    window.rt = resultText;
    return resultText.split('<br>').join('\n')  + getCredit();
  }
});

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text + getCredit());
  console.info('Trigger:', e.trigger);
  $("#noti").text("✔ คัดลอกแล้ว!");
  // $("#copy-btn").text("✔ คัดลอกแล้ว!")
  e.clearSelection();
});

clipboard.on('error', function(e) {
  console.error('Action:', e.action);
  console.error('Trigger:', e.trigger);
  $("#noti").text("เกิดข้อผิดพลาด...");
});
