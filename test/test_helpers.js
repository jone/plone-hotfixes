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


describe('compare_requirement_list', function() {
  var compare_requirement_list = require('../javascript/helpers.js').compare_requirement_list;

  it('should return true when the version matches', function() {
    assert.equal(true, compare_requirement_list("2.3", [["2.1", "2.4"]]));
  });

  it('should return false when the version matches', function() {
    assert.equal(false, compare_requirement_list("2.7", [["2.1", "2.4"]]));
  });

  it('should include the first version of a requirement (>=)', function() {
    assert.equal(true, compare_requirement_list("2.1", [["2.1", "2.4"]]));
  });

  it('should include the last version of a requirement (<=)', function() {
    assert.equal(true, compare_requirement_list("2.4", [["2.1", "2.4"]]));
  });

  it('should return true when last version is null (not yet fixed in stable version)', function() {
    assert.equal(true, compare_requirement_list("3.7", [["2.1", null]]));
  });

  it('should return true when at least one requirement matches', function() {
    assert.equal(true, compare_requirement_list("2.3",
                                                 [["3.7", "3.8"], ["2.1", "2.4"]]));
  });

  it('should return false when no requirement matches', function() {
    assert.equal(false, compare_requirement_list("4",
                                                 [["3.7", "3.8"], ["2.1", "2.4"]]));
  });

});
