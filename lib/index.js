"use strict";

const
    fs = require("fs"),
    stripJsonComments = require("strip-json-comments");

module.exports = stripJsonComments(fs.readFileSync("lib/eslint.json", "utf8"));
