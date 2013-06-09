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


describe('cmp_versions', function() {
  var cmp_versions = require('../javascript/helpers.js').cmp_versions;

  it('should return 0 when versions are equal', function() {
    assert.equal(0, cmp_versions([1, 0], [1, 0]));
    assert.equal(0, cmp_versions([1, 0, 'a', 1], [1, 0, 'a', 1]));
  });

  it('should return 1 when first greater than last', function() {
    assert.equal(1, cmp_versions([1, 1], [1, 0]));
    assert.equal(1, cmp_versions([1, 1, 'a', 1], [1, 0, 'a', 1]));
  });

  it('should return -1 when first less than last', function() {
    assert.equal(-1, cmp_versions([1, 0], [1, 1]));
    assert.equal(-1, cmp_versions([1, 0, 'a', 1], [1, 1, 'a', 1]));
  });

  it('should be able to compare alpha and stable releases properly', function() {
    assert.equal(1, cmp_versions([1, 0], [1, 'a', 1]));
  });

  it('should bugfix releases are greater than it stable ones', function() {
    assert.equal(1, cmp_versions([1, 0, 1], [1, 0]));
  });

  it('should be able to compare minor alpha and stable releases properly', function() {
    assert.equal(1, cmp_versions([1, 0], [1, 0, 'a', 1]));
  });

});


describe('version comparsing based on parse_version', function() {
  var parse_version = require('../javascript/helpers.js').parse_version;
  var compare_versions = require('../javascript/helpers.js').compare_versions;

  it('should make 4.1 > 4.0', function() {
    assert(compare_versions(parse_version('4.1'), '>', parse_version('4.0')));
  });

  it('should make 4.1 > 4', function() {
    assert(compare_versions(parse_version('4.1'), '>', parse_version('4')));
  });

  it('should make 4.1b1 > 4.1a1', function() {
    assert(compare_versions(parse_version('4.1b1'), '>', parse_version('4.1a1')));
  });

  it('should not make 4.1a1 > 4.1a1', function() {
    assert(! compare_versions(parse_version('4.1a1'), '>', parse_version('4.1a1')));
  });

  it('should make 4.1a1 >= 4.1a1', function() {
    assert(compare_versions(parse_version('4.1a1'), '>=', parse_version('4.1a1')));
  });

  it('should make 4.1a1 <= 4.1a1', function() {
    assert(compare_versions(parse_version('4.1a1'), '<=', parse_version('4.1a1')));
  });

  it('should make 4.1 > 4.1a1', function() {
    assert(compare_versions(parse_version('4.1'), '>', parse_version('4.1a1')));
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




describe('get_hotfixes_required_for', function() {
  var get_hotfixes_required_for = require('../javascript/helpers.js').get_hotfixes_required_for;

  var hotfixes = {
    "Products.PloneHotfix20110531": {
      "required_for_plone": [
          ["3.0", "4.0.6"]],
      "fixed_in_plone": ["4.0.7", "4.1rc3"]},

    "Products.Zope_Hotfix_20111024": {
      "required_for_plone": [
          ["4.0", "4.1.3"],
          ["4.2a1", "4.2b1"]
      ],
      "fixed_in_plone": ["4.1.4", "4.2b2"]}};

  it('should only return plone hotfix for Plone 3.x', function() {
    assert.deepEqual(["Products.PloneHotfix20110531"],
                     get_hotfixes_required_for("3.1", hotfixes));
  });

  it('should plone hotfix and zope hotfix for Plone 4.0.1', function() {
    assert.deepEqual(["Products.PloneHotfix20110531", "Products.Zope_Hotfix_20111024"],
                     get_hotfixes_required_for("4.0.1a", hotfixes));
  });

  it('should only zope hotfix for Plone 4.2a1', function() {
    assert.deepEqual(["Products.Zope_Hotfix_20111024"],
                     get_hotfixes_required_for("4.2a1", hotfixes));
  });

});
