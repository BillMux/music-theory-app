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
  var submission = document.getElementById('answer').innerHTML.split('')
  var submissionNote = submission[0]
  var submissionAccidental = submission[1]
  var accidentalIsCorrect;
  switch (fileWords[2]) {
    case 'natural': accidentalIsCorrect = submissionAccidental == '♮';
    case 'flat': accidentalIsCorrect = submissionAccidental == '♭';
    case 'sharp': accidentalIsCorrect = submissionAccidental == '♯';
  };
  var noteIsCorrect = fileWords[1].toUpperCase() == submissionNote;
  var isCorrect = noteIsCorrect && submissionAccidental == '♮';
  console.log(isCorrect);
};
