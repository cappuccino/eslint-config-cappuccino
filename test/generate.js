"use strict";

var child_process = require("child_process"),
    fs = require("fs");

var result = child_process.spawnSync("eslint", "-c lib/eslint.json --rulesdir lib/rules -f stylish --no-color test/fixtures".split(" "), { encoding: "utf8" });

if (result.status === 1)
{
    // Strip file path
    var output = result.stdout.trim().split("\n");

    output.shift();
    fs.writeFileSync("test/fixtures/errors.txt", output.join("\n"));
    console.log("Fixtures generated");
}
else if (result.status === 0)
    console.log("eslint returned no errors!");
else
    console.log("eslint returned status %d: %s", result.status, result.stderr);
