
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


if(typeof(module) !== "undefined") {
  module.exports.compare_requirement_list = compare_requirement_list;
}
