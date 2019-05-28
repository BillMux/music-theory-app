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
    ])
  });
});
