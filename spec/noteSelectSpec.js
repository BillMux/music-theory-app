'use strict';

describe('NoteSelect', function() {
  var NoteSelect = require('../src/noteSelect');
  var noteSelect;

  beforeEach(function() {
    noteSelect = new NoteSelect();
  });

  it('should start with note list', function() {
    expect(noteSelect.list).toEqual([
      'A', 'A#', 'B', 'C', 'C#', 'D#', 'E', 'F', 'F#', 'G', 'G#'
    ]);
  });

  it('should randomly select note to be answer', function() {
    for(var i = 0; i < 10; i++) {
      expect(noteSelect.list).toContain(noteSelect.selectAnswer());
    };
  });
});
