
var hotfixes = {

  "Products.PloneHotfix20171128": {
    "required_for_plone": [
          ["3", "3.99.??"],
          ["4", "4.99.??"],
          ["5", "5.99.??"]
    ],
    "fixed_in_plone": [
    ],
    "plone.org": "https://plone.org/security/hotfix/20171128"},

  "Products.PloneHotfix20170117": {
    "required_for_plone": [
          ["3", "3.99.??"],
          ["4", "4.3.11"],
          ["5", "5.0.6"],
          ["5.1a1", "5.1a2"]
    ],
    "fixed_in_plone": [
          "4.3.12",
          "5.0.7",
          "5.1b1"
    ],
    "plone.org": "https://plone.org/security/hotfix/20170117"},

  "Products.PloneHotfix20161129": {
    "required_for_plone": [
          ["4", "4.3.11"],
          ["5", "5.0.6"],
          ["5.1a1", "5.1a2"]
    ],
    "fixed_in_plone": [
          "4.3.12",
          "5.0.7",
          "5.1b1"
    ],
    "plone.org": "https://plone.org/security/hotfix/20161129"},

  "Products.PloneHotfix20160830": {
    "required_for_plone": [
          ["3", "3.99.??"],
          ["4", "4.3.11"],
          ["5", "5.0.6"],
          ["5.1a1", "5.1a2"]
    ],
    "fixed_in_plone": [
          "4.3.12",
          "5.0.7",
          "5.1b1"
    ],
    "plone.org": "https://plone.org/security/hotfix/20160830"},

  "Products.PloneHotfix20160419": {
    "required_for_plone": [
          ["4", "4.3.9"],
          ["5.0a1", "5.0rc3"],
          ["5.0", "5.0.4"],
          ["5.1a1", "5.1a1"]
    ],
    "fixed_in_plone": ["4.3.10", "5.0.5"],
    "plone.org": "https://plone.org/security/hotfix/20160419"},

  "plone4.csrffixes": {
    "required_for_plone": [
        ["4", "4.99.??"]
    ],
    "fixed_in_plone": ["5.0a1"],
    "plone.org": "https://plone.org/security/hotfix/20151006"},

  "Products.PloneHotfix20151208": {
    "required_for_plone": [
        ["2.1", "4.3.7"],
        ["5.0a1", "5.0"]
    ],
    "fixed_in_plone": ["4.3.8", "5.0.1"],
    "plone.org": "https://plone.org/security/hotfix/20151208"},

  "Products.PloneHotfix20150910": {
    "required_for_plone": [
        ["1.0", "4.3.6"],
        ["5.0a1", "5.0rc1"]
    ],
    "fixed_in_plone": ["4.3.7", "5.0rc2"],
    "plone.org": "https://plone.org/security/hotfix/20150910"},

  "Products.PloneHotfix20131210": {
    "required_for_plone": [
        ["3.3", "4.3.2"]
    ],
    "fixed_in_plone": ["4.3.3"],
    "plone.org": "https://plone.org/security/hotfix/20131210"},

  "Products.PloneHotfix20130618": {
    "required_for_plone": [
        ["2.0", "4.2.5"],
        ["4.3a1", "4.3.1"]
    ],
    "fixed_in_plone": ["4.2.6", "4.3.2"],
    "plone.org": "https://plone.org/security/hotfix/20130618"},

  "Products.PloneHotfix20121106": {
    "required_for_plone": [
        ["2.0", "4.2.2"],
        ["4.3a1", "4.3a2"]
    ],
    "fixed_in_plone": ["4.2.3", "4.3b1"],
    "plone.org": "https://plone.org/security/hotfix/20121106"},

  "Products.Zope_Hotfix_20111024": {
    "required_for_plone": [
        ["4.0", "4.1.3"],
        ["4.2a1", "4.2b1"]
    ],
    "fixed_in_plone": ["4.1.4", "4.2b2"],
    "plone.org": "http://plone.org/products/plone/security/advisories/security-announcement-zope-hotfix-20111024"},

  "Products.PloneHotfix20110928": {
    "required_for_plone": [
        ["4.0", "4.0.9"],
        ["4.1", "4.1"],
        ["4.2a1", "4.2a2"]
    ],
    "fixed_in_plone": ["4.0.10", "4.1.1", "4.2a3"],
    "plone.org": "https://plone.org/security/hotfix/20110928"},

  "Products.PloneHotfix20110720": {
    "required_for_plone": [
        ["2.0", "4.0.3"]
    ],
    "fixed_in_plone": ["4.0.4"],
    "plone.org": "https://plone.org/security/hotfix/20110720"},

  "Products.Zope_Hotfix_20110622": {
    "required_for_plone": [
        ["3.0", "3.3.5"],
        ["4.0", "4.0.7"],
        ["4.1a1", "4.1rc3"]
    ],
    "fixed_in_plone": ["3.3.6", "4.0.8", "4.1"],
    "plone.org": "https://plone.org/security/hotfix/20110622"},

  "Products.PloneHotfix20110531": {
    "required_for_plone": [
        ["3.0", "4.0.6"]],
    "fixed_in_plone": ["4.0.7", "4.1rc3"],
    "plone.org": "https://plone.org/security/hotfix/20110531"},


  "Products.Zope_Hotfix_CVE_2010_3198": {
    "required_for_plone": [
        ["4.0", "4.0.9"],
        ["4.1", "4.1"],
        ["4.2a1", "4.2a2"]
    ],
    "fixed_in_plone": ["4.0.10", "4.1.1", "4.2a3"]},

  "Products.Zope_Hotfix_CVE_2010_1104": {
    "required_for_plone": [
        ["2.1", "3.3.3"],
        ["4.0a1", "4.0a3"]
    ],
    "fixed_in_plone": ["3.3.4", "4.0a4"]}

};

if(typeof(module) !== "undefined") {
  module.exports.hotfixes = hotfixes;
}
