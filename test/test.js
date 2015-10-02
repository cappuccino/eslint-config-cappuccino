"use strict";

var child_process = require("child_process"),
    fs = require("fs");

var output = child_process.spawnSync("eslint", "-c lib/eslint.json --rulesdir lib/rules -f compact test/fixtures".split(" "), { encoding: "utf8" });

if (output.status === 1)
{
    var fixture = fs.readFileSync("test/fixtures/errors.txt", "utf8");

    if (fixture === output.stdout)
        process.exit(0);
}

process.exit(1);
