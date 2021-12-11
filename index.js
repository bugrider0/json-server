const express = require("express");

require("dotenv").config();

const app = express();

// Home Route
app.use(require("./routes/indexRoute"));

// Event Listner
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://127.0.0.1:${PORT}`)
);
