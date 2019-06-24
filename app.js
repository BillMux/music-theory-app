function startWindowVanish() {
  document.getElementById('start_window').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
}

function getAnswer(answer) {
  document.getElementById('answer').innerHTML = answer;
}
