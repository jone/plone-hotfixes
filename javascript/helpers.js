
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


function compare_requirement_list(version, requirements) {
  version = parse_version(version);

  for (var r=0; r<requirements.length; r++) {
    var first = parse_version(requirements[r][0]);
    var last = requirements[r][1] !== null ? parse_version(requirements[r][1]) : null;

    if (last === null && version >= first) {
      return true;
    }

    if (version >= first && version <= last) {
      return true;
    }
  }

  return false;
}



if(typeof(module) !== "undefined") {
  module.exports.parse_version = parse_version;
  module.exports.compare_requirement_list = compare_requirement_list;
}
