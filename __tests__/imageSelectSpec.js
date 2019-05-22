'use strict';

describe('ImageSelect', function() {
  var ImageSelect = require('../src/imageSelect');
  var imageSelect;

  beforeEach(function() {
    imageSelect = new ImageSelect();
  });

  it('exists', function() {
    expect(imageSelect.testAnswer).toEqual(true);
  });
});
