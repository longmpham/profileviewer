const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use("*", cors());

// connect to your DB
connectDB();

const port = 8000;





app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})


