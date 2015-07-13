'use strict';

var scripts = require('./scripts.json');
var find = require('lodash.find');
var path = require('path');
var fs = require('fs');
var detectIndent = require('detect-indent');

function info(name) {
  return find(scripts, function(script) {
    return script.title === name;
  });
}

function install(name) {
  var script = info(name);
  var packagePath = path.join(process.cwd(), 'package.json');

  var packageJson = fs.readFileSync(packagePath).toString();
  var indent = detectIndent(packageJson).indent || '  ';

  packageJson = JSON.parse(packageJson);
  packageJson.scripts || (packageJson.scripts = {});
  packageJson.scripts[script.key] = script.script;
  packageJson = JSON.stringify(packageJson, null, indent);

  fs.writeFileSync(packagePath, packageJson);
}

exports.info = info;
exports.install = install;
