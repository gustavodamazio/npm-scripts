#!/usr/bin/env node
'use strict';
var meow = require('meow');
var npmScripts = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ npm-scripts [command] [title]',
    '',
    'Examples',
    '  $ npm-scripts info major-release',
    '',
    '  $ npm-scripts install major-release',
    ''
  ]
});

var command = cli.input[0];
var title = cli.input[1];

if (command === 'info') {
  var info = npmScripts.info(title);
  console.log(JSON.stringify(info, null, 2));
} else if (command === 'install') {
  npmScripts.install(title);
  console.log(title + ' successfully added to package.json.');
}
