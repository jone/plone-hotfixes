$(document).ready(function() {

  var hotfix_table = {};

  for (var name in hotfixes) {
    var hotfix = hotfixes[name];
    var i;

    var $tbody = $('<tbody/>').appendTo($('#hotfix-table'));
    hotfix_table[name] = $tbody;
    var $tr = $('<tr/>').appendTo($tbody);

    var $firsttd = $('<td/>').appendTo($tr);
    $firsttd.append($('<div/>').append($('<b/>').append(
        $('<a/>').text(name).attr('href',
                                  'https://pypi.python.org/pypi/'.concat(name)))));

    var $required = $('<ul/>').appendTo($('<td/>').appendTo($tr));
    $(hotfix['required_for_plone']).each(function() {
      $required.append($('<li/>').text(this[0].concat(' to ').concat(this[1])));
    });

    var $fixed = $('<ul/>').appendTo($('<td/>').appendTo($tr));
    $(hotfix['fixed_in_plone']).each(function() {
      $fixed.append($('<li/>').text(this));
    });

    if(typeof(hotfix['note']) !== 'undefined') {
      $tbody.append($('<tr/>').append(
          $('<td/>').text(hotfix['note']).attr('colspan', 3)));
    }
  }


  $("#plone-version-check input").keyup(function() {
    if(!$(this).val()) {
      $('#hotfix-table tbody').show();
      return;
    }

    $('#hotfix-table tbody').hide();
    if($(this).val()) {
      $(get_hotfixes_required_for($(this).val(), hotfixes)).each(function() {
        hotfix_table[this].show();
      });
    }
  }).focus();


});
