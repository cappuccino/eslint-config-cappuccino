eslint-config-cappuccino
========================

A plugin that provides Cappuccino style rules for eslint.


## Installation

First you need to install [ESLint](http://eslint.org):

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
