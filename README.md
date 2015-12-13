eslint-config-cappuccino
========================

[![NPM version][npm-image]][npm-url]
[![Travis build status][travis-image]][travis-url]
[![Dependencies status][dependencies-image]][dependencies-url]

A shareable config that provides [Cappuccino][] [style rules][style-rules] for [eslint](http://eslint.org).


## Installation

First you need to install `eslint` (v1.10+):

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

[npm-image]: http://img.shields.io/npm/v/eslint-config-cappuccino.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-cappuccino

[travis-image]: https://img.shields.io/travis/cappuccino/eslint-config-cappuccino.svg?style=flat-square
[travis-url]: https://travis-ci.org/cappuccino/eslint-config-cappuccino

[dependencies-image]: https://img.shields.io/gemnasium/cappuccino/eslint-config-cappuccino.svg?style=flat-square
[dependencies-url]: https://gemnasium.com/cappuccino/eslint-config-cappuccino#development-dependencies
