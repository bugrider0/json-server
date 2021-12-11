const fs = require("fs");

const { Router } = require("express");

const router = Router();

// json File Path
const jsonFilePath = process.argv[2];

// Converts String Data to a JavaScript Object
const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());

router.get("/", (req, res) => {
  res.status(200).json(data);
});

module.exports = router;
