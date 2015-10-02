"use strict";

var child_process = require("child_process"),
    fs = require("fs");

var output = child_process.spawnSync("eslint", "-c lib/eslint.json --rulesdir lib/rules -f compact test/fixtures".split(" "), { encoding: "utf8" });

if (output.status === 1)
{
    fs.writeFileSync("test/fixtures/errors.txt", output.stdout);
    console.log("fixtures generated");
}
else if (output.status === 0)
    console.log("eslint returned no errors!");
else
    console.log("eslint returned status %d: %s", output.status, output.stderr);
