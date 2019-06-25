function startWindowVanish() {
  document.getElementById('start_window').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
}

function getAnswer(answer) {
  var symbol = document.getElementById('accidental_list').value;
  document.getElementById('answer').innerHTML = answer + symbol;
}

function getAccidental() {
  var symbol = document.getElementById('accidental_list').value;
  var letter = document.getElementById('answer').innerHTML[0];
  document.getElementById('answer').innerHTML = letter + symbol;
}
