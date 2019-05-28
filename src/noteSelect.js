function NoteSelect() {
  this.list = [
    'A', 'A#', 'B♭', 'B', 'C', 'C#', 'D♭', 'D', 'D#',
    'E♭', 'E', 'F', 'F#', 'G♭', 'G', 'G#', 'A♭'
  ];
};

NoteSelect.prototype.selectAnswer = function() {
  return this.list[Math.floor(Math.random() * this.list.length)];
};

NoteSelect.prototype.isCorrect = function(answer, entry) {
  var sharpFlatOrNatural = entry.substr(1);
  if(sharpFlatOrNatural === ' natural') {
    return answer === entry.substr(0, 1)
  } else if(sharpFlatOrNatural === ' sharp') {
    return answer.substr(0, 2) === entry[0] + '#'
  } else if(sharpFlatOrNatural === ' flat') {
    return answer.substr(0, 2) === entry[0] + '♭'
  };
};

module.exports = NoteSelect;
