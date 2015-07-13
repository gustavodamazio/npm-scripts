'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');
var scripts = require('./scripts.json');
var npmScripts = require('./');

var FIXTURE_DIR = path.join(__dirname, './fixture');
var FIXTURE_PKG = path.join(FIXTURE_DIR, 'package.json');

it('should be able to get the info for a script', function () {
  assert.strictEqual(npmScripts.info('patch-release'), scripts[0]);
});

before(function() {
  fs.mkdirSync(FIXTURE_DIR);
  fs.writeFileSync(FIXTURE_PKG, JSON.stringify({ scripts: { foo: 'bar' } }, null, 2));
  process.chdir(FIXTURE_DIR);
});

after(function() {
  process.chdir(path.join(FIXTURE_DIR, '../'));
  fs.unlinkSync(FIXTURE_PKG);
  fs.rmdirSync(FIXTURE_DIR);
});

it('should be able to install a script', function () {
  npmScripts.install('patch-release')
  var packageJson = require(FIXTURE_PKG);
  assert.strictEqual(packageJson.scripts['patch-release'], scripts[0].script);
});
