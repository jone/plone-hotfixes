var assert = require("assert");


describe('parse_version', function() {
  var parse_version = require('../javascript/helpers.js').parse_version;

  it('should split version parts and convert to integer when possible', function() {
    assert.deepEqual([1, 22, 3], parse_version("1.22.3"));
  });

  it('should keep non-numeric parts as string in the list', function() {
    assert.deepEqual([1, 22, 3, "a", 1], parse_version("1.22.3a1"));
  });

  it('should keep non-numeric parts as string in the list', function() {
    assert.deepEqual([1, 22, 3, "beta", 1], parse_version("1.22.3beta1"));
  });

});
