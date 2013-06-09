$(document).ready(function() {

  function colorize_version(version) {
    cls = 'version-'.concat(version[0]).concat(' version-').concat(
        version.substr(0, 3).replace('.', '-'));
    return $('<span/>').text(version).attr('class', cls);
  }

  function append_colorized_versions(container, from_version, to_version) {
    container.append(colorize_version(from_version));
    if(to_version) {
      container.append($('<span />').text(' to ').attr('class', 'version-range'));
      container.append(colorize_version(to_version));
    }
    return container;
  }

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
      $required.append(append_colorized_versions($('<li/>'), this[0], this[1]));
    });

    var $fixed = $('<ul/>').appendTo($('<td/>').appendTo($tr));
    $(hotfix['fixed_in_plone']).each(function() {
      $fixed.append($('<li/>').append(colorize_version(this)));
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
