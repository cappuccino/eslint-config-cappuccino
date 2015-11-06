eslint-config-cappuccino
========================

[![NPM version][npm-image]][npm-url]
[![Travis build status][travis-image]][travis-url]
[![Appveyor build status][appveyor-image]][appveyor-url]
[![devDependencies status][dev-dependencies-image]][dev-dependencies-url]

A shareable config that provides [Cappuccino][] [style rules][style-rules] for [eslint](http://eslint.org).


## Installation

First you need to install `eslint` (v1.8+):

```
$ npm install -g eslint
```

Next, install `eslint-config-cappuccino`:

```
$ npm install -g eslint-config-cappuccino
```

**Note:** If `eslint` is installed locally and *not* globally, or if you are running a local version via `node_modules/.bin/eslint`, then you must also install `eslint-config-cappuccino` locally.


## Usage

Add `cappuccino` to the `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": "cappuccino"
}
```

[Cappuccino]: http://cappuccino.org
[style-rules]: https://github.com/cappuccino/cappuccino/blob/master/CONTRIBUTING.md#cappuccino-coding-style-guidelines

[npm-image]: http://img.shields.io/npm/v/eslint-config-cappuccino.svg?style=flat
[npm-url]: https://npmjs.org/package/eslint-config-cappuccino

[travis-image]: https://travis-ci.org/cappuccino/eslint-config-cappuccino.svg?branch=master
[travis-url]: https://travis-ci.org/cappuccino/eslint-config-cappuccino

[appveyor-image]: https://ci.appveyor.com/api/projects/status/7dd45pxivdgdc473?svg=true
[appveyor-url]: https://ci.appveyor.com/project/aparajita/eslint-config-cappuccino

[dev-dependencies-image]: https://gemnasium.com/cappuccino/eslint-config-cappuccino.svg
[dev-dependencies-url]: https://gemnasium.com/cappuccino/eslint-config-cappuccino#development-dependencies
