eslint-config-cappuccino
========================

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

A shareable config that provides Cappuccino style rules for [`eslint`](http://eslint.org).


## Installation

First you need to install `eslint`:

```
$ npm i eslint --save-dev
```

Next, install `eslint-config-cappuccino`:

```
$ npm install eslint-config-cappuccino --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-config-cappuccino` globally.


## Usage

Add `cappuccino` to the `extends` section of your `.eslintrc` configuration file. You can omit the `eslint-config-` prefix:

```json
{
    "extends": "cappuccino"
}
```

[npm-url]: https://npmjs.org/package/gulp
[npm-image]: http://img.shields.io/npm/v/eslint-config-cappuccino.svg?style=flat

[travis-url]: https://travis-ci.org/cappuccino/eslint-config-cappuccino
[travis-image]: https://travis-ci.org/cappuccino/eslint-config-cappuccino.svg?branch=master
