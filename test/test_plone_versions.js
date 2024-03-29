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
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20110720",
            "Products.Zope_Hotfix_20110622",
            "Products.PloneHotfix20110531",
            "Products.Zope_Hotfix_CVE_2010_1104"
        ],
        "3.0");
  });

});


describe("Plone 3.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20110720",
            "Products.Zope_Hotfix_20110622",
            "Products.PloneHotfix20110531",
            "Products.Zope_Hotfix_CVE_2010_1104"
        ],
        "3.3");
  });

});


describe("Plone 3.3.5", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20110720",
            "Products.Zope_Hotfix_20110622",
            "Products.PloneHotfix20110531"
        ],
        "3.3.5");
  });

});


describe("Plone 3.3.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.PloneHotfix20110720",
            "Products.PloneHotfix20110531"
        ],
        "3.3.6");
  });

});



describe("Plone 4.0", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.Zope_Hotfix_20111024",
            "Products.PloneHotfix20110928",
            "Products.PloneHotfix20110720",
            "Products.Zope_Hotfix_20110622",
            "Products.PloneHotfix20110531",
            "Products.Zope_Hotfix_CVE_2010_3198"
        ],
        "4.0");
  });

});



describe("Plone 4.0.9", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.Zope_Hotfix_20111024",
            "Products.PloneHotfix20110928",
            "Products.Zope_Hotfix_CVE_2010_3198"
        ],
        "4.0.9");
  });

});




describe("Plone 4.0.10", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.Zope_Hotfix_20111024"
        ],
        "4.0.10");
  });

});



describe("Plone 4.1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106",
            "Products.Zope_Hotfix_20111024",
            "Products.PloneHotfix20110928",
            "Products.Zope_Hotfix_CVE_2010_3198"
        ],
        "4.1");
  });

});



describe("Plone 4.1.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106"
        ],
        "4.1.6");
  });

});




describe("Plone 4.2", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106"
        ],
        "4.2");
  });

});





describe("Plone 4.2.2", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618",
            "Products.PloneHotfix20121106"
        ],
        "4.2.2");
  });

});





describe("Plone 4.2.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618"
        ],
        "4.2.3");
  });

});




describe("Plone 4.2.5", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618"
        ],
        "4.2.5");
  });

});



describe("Plone 4.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910",
            "Products.PloneHotfix20131210",
            "Products.PloneHotfix20130618"
        ],
        "4.3");
  });

});



describe("Plone 4.3.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910"
        ],
        "4.3.6");
  });

});



describe("Plone 4.3.7", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes",
            "Products.PloneHotfix20151208"
        ],
        "4.3.7");
  });

});



describe("Plone 4.3.8", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes"
        ],
        "4.3.8");
  });

});



describe("Plone 4.3.9", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "plone4.csrffixes"
        ],
        "4.3.9");
  });

});


describe("Plone 4.3.10", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "plone4.csrffixes"
        ],
        "4.3.10");
  });

});


describe("Plone 4.3.16", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "plone4.csrffixes"
        ],
        "4.3.16");
  });

});


describe("Plone 4.3.17", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "plone4.csrffixes"
        ],
        "4.3.17");
  });

});


describe("Plone 5.0a1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910"
        ],
        "5.0a1");
  });

});


describe("Plone 5.0rc1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "Products.PloneHotfix20151208",
            "Products.PloneHotfix20150910"
        ],
        "5.0rc1");
  });

});



describe("Plone 5.0rc2", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "Products.PloneHotfix20151208"
        ],
        "5.0rc2");
  });

});



describe("Plone 5.0rc3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "Products.PloneHotfix20151208"
        ],
        "5.0rc3");
  });

});



describe("Plone 5.0", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419",
            "Products.PloneHotfix20151208"
        ],
        "5.0");
  });

});


describe("Plone 5.0.1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419"
        ],
        "5.0.1");
  });

});


describe("Plone 5.0.2", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419"
        ],
        "5.0.2");
  });

});


describe("Plone 5.0.3", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419"
        ],
        "5.0.3");
  });

});


describe("Plone 5.0.4", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419"
        ],
        "5.0.4");
  });

});


describe("Plone 5.0.5", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830"
        ],
        "5.0.5");
  });

});


describe("Plone 5.0.6", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830"
        ],
        "5.0.6");
  });

});


describe("Plone 5.0.9", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
        ],
        "5.0.9");
  });

});


describe("Plone 5.0.10", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121"
        ],
        "5.0.10");
  });

});


describe("Plone 5.1a1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
            "Products.PloneHotfix20171128",
            "Products.PloneHotfix20170117",
            "Products.PloneHotfix20161129",
            "Products.PloneHotfix20160830",
            "Products.PloneHotfix20160419"
        ],
        "5.1a1");
  });

});

describe("Plone 5.2a1", function() {

  it('should require fixes', function() {
    assertRequires(
        [
            "Products.PloneHotfix20210518",
            "Products.PloneHotfix20200121",
        ],
        "5.2a1");
  });

});
