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
  letter = entry.substr(0, 1);
  switch(entry.substr(1)) {
    case ' natural':
      return answer === letter;
    case ' sharp':
      return answer === letter + '#';
    case ' flat':
      return answer === letter + '♭';
  };
};

module.exports = NoteSelect;
