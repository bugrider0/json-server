const fs = require("fs");

const express = require("express");

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
const PORT = 3001;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://127.0.0.1:${PORT}`)
);
