const fs = require("fs");

// json File Path
const jsonFilePath = process.argv[2];

// Converts String Data to a JavaScript Object
const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());

module.exports = (req, res) => {
  res.status(200).json(data);
};
