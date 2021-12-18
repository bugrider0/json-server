const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

// Home Route
app.use(require("./routes/indexRoute"));

// Event Listner
const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://127.0.0.1:${PORT}`)
);
