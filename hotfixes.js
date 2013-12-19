
var hotfixes = {

  "Products.PloneHotfix20131210": {
    "required_for_plone": [
        ["3.3", null]
    ],
    "fixed_in_plone": [],
    "plone.org": "https://plone.org/security/20131210"},

  "Products.PloneHotfix20130618": {
    "required_for_plone": [
        ["2.0", "4.2.5"],
        ["4.3a1", "4.3.1"]
    ],
    "fixed_in_plone": ["4.2.6", "4.3.2"],
    "plone.org": "http://plone.org/products/plone/security/advisories/20130611-announcement"},

  "Products.PloneHotfix20121106": {
    "required_for_plone": [
        ["2.0", "4.2.2"],
        ["4.3a1", "4.3a2"]
    ],
    "fixed_in_plone": ["4.2.3", "4.3b1"],
    "plone.org": "http://plone.org/products/plone-hotfix/releases/20121106"},

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
    "plone.org": "http://plone.org/products/plone-hotfix/releases/20110928"},

  "Products.PloneHotfix20110720": {
    "required_for_plone": [
        ["2.0", "4.0.3"]
    ],
    "fixed_in_plone": ["4.0.4"],
    "plone.org": "http://plone.org/products/plone-hotfix/releases/CVE-2011-0720"},

  "Products.Zope_Hotfix_20110622": {
    "required_for_plone": [
        ["3.0", "3.3.5"],
        ["4.0", "4.0.7"],
        ["4.1a1", "4.1rc3"]
    ],
    "fixed_in_plone": ["3.3.6", "4.0.8", "4.1"],
    "plone.org": "http://plone.org/products/plone-hotfix/releases/20110622"},

  "Products.PloneHotfix20110531": {
    "required_for_plone": [
        ["3.0", "4.0.6"]],
    "fixed_in_plone": ["4.0.7", "4.1rc3"],
    "plone.org": "http://plone.org/products/plone-hotfix/releases/20110531"},


  "Products.Zope_Hotfix_CVE_2010_3198": {
    "required_for_plone": [
        ["4.0", "4.0.9"],
        ["4.1", "4.1"],
        ["4.2a1", "4.2a2"]
    ],
    "fixed_in_plone": ["4.0.10", "4.1.1", "4.2a3"],
    "note": "This patch is included by Products.PloneHotfix20110928"},

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
