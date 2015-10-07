var assert = require('assert');
var get_hotfixes_required_for = require('../javascript/helpers.js').get_hotfixes_required_for;
var hotfixes = require('../hotfixes.js').hotfixes;


function get_required_versions_for_hotfix(hotfix, plone_versions) {
  var got_plone_versions = new Array();

  for(var v=0; v<plone_versions.length; v++) {
    var version = plone_versions[v];
    var got_hotfixes = get_hotfixes_required_for(version, hotfixes);
    if (got_hotfixes.indexOf(hotfix) !== -1) {
      got_plone_versions.push(version);
    }
  }
  return got_plone_versions;
}


function assert_hotfixes_required_by(expected_plone_versions, hotfix) {
  var got_plone_versions = get_required_versions_for_hotfix(
      hotfix, expected_plone_versions);

  assert.deepEqual(
      expected_plone_versions, got_plone_versions,
      String.format(
          "Expected {0} required for Plone versions:\n- {1}\nbot got:\n- {2}",
          hotfix,
          expected_plone_versions.join('\n- '),
          got_plone_versions.join('\n- ')));
}

function assert_hotfixes_not_required_by(plone_versions, hotfix) {
  var got_plone_versions = get_required_versions_for_hotfix(
      hotfix, plone_versions);

  assert.deepEqual(
      [], got_plone_versions,
      String.format(
          "Hotfix {0} is required for some Plone versions but should not:\n- {1}",
          hotfix,
          got_plone_versions.join('\n- ')));
}


/* ************************ */


describe('plone4.csrffixes', function() {
  it('should be required for all current Plone versions.', function() {
    assert_hotfixes_required_by(
        ["4.0", "4.0", "4.0.1", "4.0.10", "4.0.2", "4.0.3", "4.0.4", "4.0.5", "4.0.6", "4.0.6.1", "4.0.7", "4.0.8", "4.0.9",
         "4.1", "4.1", "4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.1.6",
         "4.2", "4.2", "4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.2.7",
         "4.3", "4.3", "4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3.7", "4.3a1", "4.3a2", "4.3b1", "4.3b2"],
        "plone4.csrffixes");
  });

  it('should does not work with versions older than 4', function() {
    assert_hotfixes_not_required_by(
          ["1.0",
           "2.0",
           "3.2", "3.2.1", "3.2.2", "3.2.3",
           "3.3", "3.3", "3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6"],
        "plone4.csrffixes");
  });

  it('should is not necessary for Plone 5 versions', function() {
    assert_hotfixes_not_required_by(
        ["5.0a1", "5.0b1", "5.0rc1", "5.0"],
        "plone4.csrffixes");
  });
});


describe('Products.PloneHotfix20150910', function() {
  it('should be required for all current Plone versions.', function() {
    assert_hotfixes_required_by(
          ["1.0",
           "2.0",
           "3.2", "3.2.1", "3.2.2", "3.2.3",
           "3.3", "3.3", "3.3.1", "3.3.2", "3.3.3", "3.3.4", "3.3.5", "3.3.6",
           "4.0", "4.0", "4.0.1", "4.0.10", "4.0.2", "4.0.3", "4.0.4", "4.0.5", "4.0.6", "4.0.6.1", "4.0.7", "4.0.8", "4.0.9",
           "4.1", "4.1", "4.1.1", "4.1.2", "4.1.3", "4.1.4", "4.1.5", "4.1.6",
           "4.2", "4.2", "4.2.1", "4.2.2", "4.2.3", "4.2.4", "4.2.5", "4.2.6", "4.2.7",
           "4.3", "4.3", "4.3.1", "4.3.2", "4.3.3", "4.3.4", "4.3.5", "4.3.6", "4.3a1", "4.3a2", "4.3b1", "4.3b2",
           "5.0rc1"],
          "Products.PloneHotfix20150910");
  });

  it('should not be required for versions 5.0rc2 and newer', function() {
    assert_hotfixes_not_required_by(
        ["5.0rc2"],
        "Products.PloneHotfix20150910");
  });
});


describe('Products.PloneHotfix20131210', function() {
  it('should be required for Plone 4 and Plone 3.3 series', function() {
    assert_hotfixes_required_by(
        ["4.3.2", "4.3.1", "4.3",
         "4.2.7", "4.2.6", "4.2.5", "4.2.4", "4.2.3", "4.2.2", "4.2.1", "4.2",
         "4.1.6", "4.1.5", "4.1.4", "4.1.3", "4.1.2", "4.1.1", "4.1",
         "4.0.9", "4.0.7", "4.0.5", "4.0.4", "4.0.3", "4.0.2", "4.0.1", "4.0",
         "3.3.6", "3.3.5", "3.3.4", "3.3.3", "3.3.2", "3.3.1", "3.3"],
        "Products.PloneHotfix20131210");
  });

  it('should not be required for versions older than 3.3', function() {
    assert_hotfixes_not_required_by(
        ["3.2", "3.1", "2.0"],
        "Products.PloneHotfix20131210");
  });

  it('should not be fixed in 4.3.3 and newer', function() {
    assert_hotfixes_not_required_by(
        ["4.3.3"],
        "Products.PloneHotfix20131210");
  });
});


describe('Products.PloneHotfix20110531', function() {
  it('should be required for Plone 3 series and early 4.0', function() {
    assert_hotfixes_required_by(
        ["3.0", "4.0", "4.0.6"],
        "Products.PloneHotfix20110531");
  });

  it('should not be required for 4.0.7 and 4.1rc3', function() {
    assert_hotfixes_not_required_by(
        ["4.0.7", "4.1rc3"],
        "Products.PloneHotfix20110531");
  });
});



describe('Products.PloneHotfix20110720', function() {
  it('should be required for 2.0 to 4.0.3', function() {
    assert_hotfixes_required_by(
        ["2.0", "3.0", "4.0", "4.0.3"],
        "Products.PloneHotfix20110720");
  });

  it('should not be fixed in 4.0.4 and above', function() {
    assert_hotfixes_not_required_by(
        ["4.0.4", "4.0.7", "4.1"],
        "Products.PloneHotfix20110720");
  });
});



describe('Products.PloneHotfix20110928', function() {
  it('should be required for 4.0 to 4.2a2', function() {
    assert_hotfixes_required_by(
        ["4.0", "4.1", "4.2a2"],
        "Products.PloneHotfix20110928");
  });

  it('should not be fixed in later 4 versions', function() {
    assert_hotfixes_not_required_by(
        ["4.0.10", "4.1.1", "4.2a3"],
        "Products.PloneHotfix20110928");
  });
});



describe('Products.PloneHotfix20121106', function() {
  it('should require hotfix', function() {
    assert_hotfixes_required_by(
        ["2.0",
         "3.0",
         "4.0",
         "4.1.6",
         "4.2.2",
         "4.3a2"],
        "Products.PloneHotfix20121106");
  });

  it('should not require hotfix', function() {
    assert_hotfixes_not_required_by(
        ["4.2.3", "4.3b1", "4.3rc1", "4.3", "4.3.1"],
        "Products.PloneHotfix20121106");
  });
});



describe('Products.Zope_Hotfix_20111024', function() {
  it('should require hotfix', function() {
    assert_hotfixes_required_by(
        ["4.0",
         "4.1",
         "4.1.3",
         "4.2a1",
         "4.2b1"],
        "Products.Zope_Hotfix_20111024");
  });

  it('should not require hotfix', function() {
    assert_hotfixes_not_required_by(
        ["4.1.4", "4.2b2", "4.2", "4.3", "3.0", "2.0"],
        "Products.Zope_Hotfix_20111024");
  });
});



describe('Products.Zope_Hotfix_CVE_2010_1104', function() {
  it('should require hotfix', function() {
    assert_hotfixes_required_by(
        ["2.1",
         "2.5",
         "3.0",
         "3.3.3",
         "4.0a1"],
        "Products.Zope_Hotfix_CVE_2010_1104");
  });

  it('should not require hotfix', function() {
    assert_hotfixes_not_required_by(
        ["2.0",
         "3.3.4",
         "4.0a4",
         "4.1",
         "4.2",
         "4.3"
        ],
        "Products.Zope_Hotfix_CVE_2010_1104");
  });
});



describe('Products.Zope_Hotfix_CVE_2010_3198', function() {
  it('should require hotfix', function() {
    assert_hotfixes_required_by(
        ["4.0",
         "4.0.9",
         "4.1",
         "4.2a2"],
        "Products.Zope_Hotfix_CVE_2010_3198");
  });

  it('should not be fixed in 4.3b1 and 4.2.5', function() {
    assert_hotfixes_not_required_by(
        ["2.0",
         "3.0",
         "3.3.5",
         "4.0.10",
         "4.1.1",
         "4.2a3"
        ],
        "Products.Zope_Hotfix_CVE_2010_3198");
  });
});




describe('Products.Zope_Hotfix_20110622', function() {
  it('should require hotfix', function() {
    assert_hotfixes_required_by(
        ["3.0",
         "3.1",
         "3.2",
         "3.3.5",
         "4.0",
         "4.0.7",
         "4.1a1",
         "4.1rc3"],
        "Products.Zope_Hotfix_20110622");
  });

  it('should not be fixed in 4.3b1 and 4.2.5', function() {
    assert_hotfixes_not_required_by(
        ["2.0",
         "2.5",
         "3.3.6",
         "4.0.8",
         "4.1"
        ],
        "Products.Zope_Hotfix_20110622");
  });
});
