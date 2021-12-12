const fs = require("fs");

// json File Path
let jsonFilePath = process.argv[2];

// if Another json File Find Use Instead In Default File
process.argv[3] ? (jsonFilePath = process.argv[3]) : null;

// Converts String Data to a JavaScript Object
const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());

module.exports = (req, res) => {
  res.status(200).json(data);
};
