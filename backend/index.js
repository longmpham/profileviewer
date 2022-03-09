const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());
app.use("*", cors());

// connect to your DB
connectDB();

const port = process.env.PORT || 8001
app.use('/api/getProfiles', require("./routes/profileRoutes"))




app.listen(process.env.PORT, () => {
  console.log("Server is running on port: " + process.env.PORT);
})


