# npm-scripts [![Build Status](https://travis-ci.org/thejameskyle/npm-scripts.svg?branch=master)](https://travis-ci.org/thejameskyle/npm-scripts)

> Find and install interesting npm scripts.


## Install

```
$ npm install --save npm-scripts
```


## Usage

```js
var npmScripts = require('npm-scripts');

npmScripts.info('patch-release');
//=> { "title": "patch-release", ... };
```


## CLI

```
$ npm install --global npm-scripts
```
```
$ npm-scripts --help

  Usage
    npm-scripts [command] [title]

  Example
    npm-scripts info patch-release
    npm-scripts install patch-release
```


## API

### npmScripts.info(title)

#### title

*Required*
Type: `string`

### npmScripts.install(title)

#### title

*Required*
Type: `string`

## License

MIT © [](https://github.com/thejameskyle)
