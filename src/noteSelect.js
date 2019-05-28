function NoteSelect() {
  this.list = [
    'A', 'A#', 'B', 'C', 'C#', 'D#', 'E', 'F', 'F#', 'G', 'G#'
  ];
};

NoteSelect.prototype.selectAnswer = function() {
  return this.list[Math.floor(Math.random() * 12)]
};

module.exports = NoteSelect;
