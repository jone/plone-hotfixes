
function parse_version(version) {
  var parts = version.split(/(\d+|[a-z]+|\.)/);
  var result = [];

  for (var i=0; i < parts.length; i++) {
    if (parts[i] === "" || parts[i] === ".") {
      continue;
    }

    else if (parts[i].match(/^\d+$/)) {
      result.push(parseInt(parts[i], 10));
    }

    else {
      result.push(parts[i]);
    }

  }

  return result;
}


function cmp_versions(first, second) {
  if (first >= second && first <= second) {
    return 0;
  }

  if (first.length < second.length) {
    return cmp_versions(second, first) * -1;
  }

  var first_part, second_part;
  for (var i=0; i<first.length; i++) {
    first_part = first[i];
    second_part = second[i];
    if (first_part === second_part) {
      continue;
    }

    if (typeof(second_part) === 'undefined') {
      return isNaN(first_part) ? -1 : 1;
    }

    if (isNaN(first_part) != isNaN(second_part)) {
      return isNaN(first_part) ? -1 : 1;
    }

    return first_part > second_part ? 1 : -1;
  }

  throw 'unexpected comparison state in cmp_versions('.concat(first_part).concat(
      ', ').concat(second_part).concat(')');
}

function compare_versions(first, operator, second) {
  if (operator == '==') {
    return cmp_versions(first, second) === 0;
  }

  if ((operator == '<=' || operator == '>=') && cmp_versions(first, second) === 0) {
    return true;
  }

  if (operator == '>' || operator == '>=') {
    return cmp_versions(first, second) == 1;
  }

  if (operator == '<' || operator == '<=') {
    return cmp_versions(first, second) == -1;
  }

  throw 'compare_versions: unkown operator: '.concate(operator);
}



function compare_requirement_list(version, requirements) {
  version = parse_version(version);

  for (var r=0; r<requirements.length; r++) {
    var first = parse_version(requirements[r][0]);
    var last = requirements[r][1] !== null ? parse_version(requirements[r][1]) : null;

    if (last === null && compare_versions(version, '>=', first)) {
      return true;
    }

    if (compare_versions(version, '>=', first) &&
        compare_versions(version, '<=', last)) {
      return true;
    }
  }

  return false;
}


function get_hotfixes_required_for(plone_version, requirements) {
  var result = [];

  for (var name in requirements) {
    var requirement = requirements[name];
    if (compare_requirement_list(plone_version, requirement["required_for_plone"])) {
      result.push(name);
    }
  }

  return result;
}



if(typeof(module) !== "undefined") {
  module.exports.parse_version = parse_version;
  module.exports.cmp_versions = cmp_versions;
  module.exports.compare_versions = compare_versions;
  module.exports.compare_requirement_list = compare_requirement_list;
  module.exports.get_hotfixes_required_for = get_hotfixes_required_for;
}
