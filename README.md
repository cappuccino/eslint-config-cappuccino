eslint-config-cappuccino
========================

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build status][appveyor-image]][appveyor-url]

A shareable config that provides Cappuccino style rules for [`eslint`](http://eslint.org).


## Installation

First you need to install `eslint`:

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

[npm-url]: https://npmjs.org/package/eslint-config-cappuccino
[npm-image]: http://img.shields.io/npm/v/eslint-config-cappuccino.svg?style=flat

[travis-url]: https://travis-ci.org/cappuccino/eslint-config-cappuccino
[travis-image]: https://travis-ci.org/cappuccino/eslint-config-cappuccino.svg?branch=master

[appveyor-url]: https://ci.appveyor.com/project/aparajita/eslint-config-cappuccino
[appveyor-image]: https://ci.appveyor.com/api/projects/status/7dd45pxivdgdc473?svg=true
