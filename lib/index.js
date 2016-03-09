"use strict";

const
    fs = require("fs"),
    path = require("path"),
    stripJsonComments = require("strip-json-comments");

const config = fs.readFileSync(path.join(__dirname, "eslint.json"), "utf8");

module.exports = JSON.parse(stripJsonComments(config));
