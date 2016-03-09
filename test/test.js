"use strict";

const
    CLIEngine = require("eslint").CLIEngine,
    fs = require("fs");

let cli = new CLIEngine({
        configFile: "lib/index.js",
        ignore: false,
        rulesDir: "lib/rules"
    }),
    report = cli.executeOnFiles(["test/fixtures"]),
    status = 0;

if (report)
{
    const
        generate = process.argv[2] === "generate",
        reporter = cli.getFormatter("compact");

    let output = reporter(report.results);

    // Strip file paths from the report
    output = output.split("\n").map((line) =>
    {
        const pos = line.indexOf(": line ");

        if (pos > 0)
            return "test.js" + line.substring(pos);

        return line;
    }).join("\n");

    if (generate)
    {
        fs.writeFileSync("test/fixtures/errors.txt", output);
        console.log("Fixtures generated");
    }
    else
    {
        const fixture = fs.readFileSync("test/fixtures/errors.txt", "utf8");

        if (fixture === output)
            console.log("Test passed");
        else
        {
            console.log("Oops, fixture doesn't match");
            status = 1;
        }
    }
}
else
{
    console.log("eslint failed!");
    status = 1;
}

process.exit(status);
