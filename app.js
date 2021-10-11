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

function submit() {
  var path = document.getElementById('question_image').src;
  var filename = path.substring(path.lastIndexOf('/') + 1, path.indexOf('.'));
  var fileWords = filename.split('-');
  var submission = document.getElementById('answer').innerHTML.split('');
  var accidentalIsCorrect = checkAccidental(fileWords[2], submission[1]);
  var noteIsCorrect = fileWords[1].toUpperCase() === submission[0];
  var isCorrect = noteIsCorrect && accidentalIsCorrect;
  if (isCorrect) { correct(); } else { incorrect(); };
};

function checkAccidental(acc, sub) {
  switch (acc) {
    case 'natural': return sub === '♮';
    case 'flat': return sub === '♭';
    case 'sharp': return sub === '♯';
  };
};

function correct() {
  // do something if correct
};

function incorrect() {
// do something if incorrect
};
