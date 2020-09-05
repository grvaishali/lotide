var chai = require('chai');
var assert = chai.assert;

var className = require('../className.js');
var addClass = className.addClass;

// The rest of the file remains the same

describe('addClass', function() {
  it('should add class to element', function() {
    var element = { className: '' };

    addClass(element, 'test-class');

    assert.equal(element.className, 'test-class');
  });

  it('should not add a class which already exists', function() {
    var element = { className: 'exists' };
  
    addClass(element, 'exists');
  
    var numClasses = element.className.split(' ').length;
    assert.equal(numClasses, 1);
  });
});