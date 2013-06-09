var assert = require("assert");
var get_hotfixes_required_for = require('../javascript/helpers.js').get_hotfixes_required_for;
var hotfixes = require('../hotfixes.js').hotfixes;


function assertRequires(expected_hotfixes, plone_version) {
  var got_hotfixes = get_hotfixes_required_for(plone_version, hotfixes);
  assert.deepEqual(
      expected_hotfixes, got_hotfixes,
      String.format("Plone {0} should require hotfixes:\n- {1}\nbut got:\n- {2}",
                    plone_version,
                    expected_hotfixes.join('\n- '),
                    got_hotfixes.join('\n- ')));
}


/* ************************ */


describe("Plone 3.0", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110531",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_CVE_2010_1104",
            "Products.Zope_Hotfix_20110622"
        ],
        "3.0");
  });

});


describe("Plone 3.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110531",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_CVE_2010_1104",
            "Products.Zope_Hotfix_20110622"
        ],
        "3.3");
  });

});


describe("Plone 3.3.5", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110531",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_20110622"
        ],
        "3.3.5");
  });

});


describe("Plone 3.3.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110531",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611"
        ],
        "3.3.6");
  });

});



describe("Plone 4.0", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110531",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20110928",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_20111024",
            "Products.Zope_Hotfix_CVE_2010_3198",
            "Products.Zope_Hotfix_20110622"
        ],
        "4.0");
  });

});



describe("Plone 4.0.9", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110928",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_20111024",
            "Products.Zope_Hotfix_CVE_2010_3198"
        ],
        "4.0.9");
  });

});




describe("Plone 4.0.10", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_20111024"
        ],
        "4.0.10");
  });

});



describe("Plone 4.1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20110928",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611",
            "Products.Zope_Hotfix_20111024",
            "Products.Zope_Hotfix_CVE_2010_3198"
        ],
        "4.1");
  });

});



describe("Plone 4.1.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611"
        ],
        "4.1.5");
  });

});




describe("Plone 4.2", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20130611"
        ],
        "4.2");
  });

});




describe("Plone 4.2.5", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20130611"
        ],
        "4.2.5");
  });

});



describe("Plone 4.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20130611"
        ],
        "4.3");
  });

});
