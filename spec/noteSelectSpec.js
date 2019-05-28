'use strict';

describe('NoteSelect', function() {
  var NoteSelect = require('../src/noteSelect');
  var noteSelect;

  beforeEach(function() {
    noteSelect = new NoteSelect();
  });

  it('should start with note list', function() {
    expect(noteSelect.list.length).toEqual(17)
    expect(noteSelect.list).toEqual([
      'A', 'A#', 'B♭', 'B', 'C', 'C#', 'D♭', 'D', 'D#', 'E♭', 'E', 'F', 'F#', 'G♭', 'G', 'G#', 'A♭'
    ]);
  });

  describe('#selectAnswer', function() {
    it('should randomly select note to be answer', function() {
      for(var i = 0; i < 10; i++) {
        expect(noteSelect.list).toContain(noteSelect.selectAnswer());
      };
    });
  });

  describe('#isCorrect', function(){
    it('returns "true" when answer is correct', function() {
      expect(noteSelect.isCorrect('F#', 'F sharp')).toEqual(true)
      expect(noteSelect.isCorrect('E', 'E natural')).toEqual(true)
      expect(noteSelect.isCorrect('B♭', 'B flat')).toEqual(true)
    });

    it ('returns "false" when answer is incorrect', function() {
      expect(noteSelect.isCorrect('F#', 'G flat')).toEqual(false)
      expect(noteSelect.isCorrect('E', 'B sharp')).toEqual(false)
      expect(noteSelect.isCorrect('B♭', 'A natural')).toEqual(false)
    });
  });


});
