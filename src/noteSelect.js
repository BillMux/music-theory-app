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
  if(entry.charAt(1) === '♮') { return entry.charAt(0) === answer }
  return answer === entry
};

module.exports = NoteSelect;
