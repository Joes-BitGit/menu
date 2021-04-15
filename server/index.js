// entry point into backend
// responsibility: creating and init express app, starting and listening to given port
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

// express middleware that attaches to the request body
app.use(cors());

// Need this to create data in json format middleware
app.use(express.json());

// Prod ready
const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
