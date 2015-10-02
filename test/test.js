"use strict";

var child_process = require("child_process"),
    fs = require("fs");

var result = child_process.spawnSync("node_modules/.bin/eslint", "-c lib/eslint.json --rulesdir lib/rules -f compact test/fixtures".split(" "), { encoding: "utf8" });

if (result.status === 1)
{
    var fixture = fs.readFileSync("test/fixtures/errors.txt", "utf8");

    if (fixture === result.stdout)
    {
        console.log("test passed");
        process.exit(0);
    }
}

console.log("test failed with status ", result.status);
process.exit(1);
