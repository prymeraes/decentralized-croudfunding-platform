const path = require("path");
const solc = require("solc");
const fs = require("fs-extra"); //fs is short for 'file system'

const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath); //removeSync is one of the benefits of using fs-extra which allows a complete delete folder & all contents

const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

const output = solc.compile(source, 1).contracts; // ERRORS OUT

fs.ensureDirSync(buildPath); //creates the build folder if it is not already existing

// iterate over the
// outputJsonSync writes a JSON file to a folder in the directory
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(":", "") + ".json"),
    output[contract]
  );
}
