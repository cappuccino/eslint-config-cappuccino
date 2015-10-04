"use strict";

/* eslint-disable no-var */

var child_process = require("child_process"),
    fs = require("fs");

var result = child_process.spawnSync("./node_modules/.bin/eslint", "--no-eslintrc -c ./lib/eslint.json --rulesdir ./lib/rules -f stylish --no-color ./test/fixtures".split(" "), { encoding: "utf8" });

if (result.status === 1)
{
    // Strip file path
    var output = result.stdout.trim().split("\n");

    output.shift();
    output = output.join("\n");

    var fixture = fs.readFileSync("test/fixtures/errors.txt", "utf8");

    if (fixture === output)
    {
        console.log("Test passed");
        process.exit(0);
    }
    else
    {
        console.log("Oops, fixture doesn't match");
        process.exit(1);
    }
}

console.log("Test failed with status ", result.status);
process.exit(1);
