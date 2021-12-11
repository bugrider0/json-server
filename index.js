const fs = require("fs");

const express = require("express");
require("dotenv").config();

const app = express();

// json File Path
const jsonFilePath = process.argv[2];

// Converts String Data to a JavaScript Object
const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());

// Home Route
app.get("/", (req, res) => {
  res.status(200).json(data);
});

// Event Listner
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://127.0.0.1:${PORT}`)
);
