const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware.js")
const dotenv = require("dotenv").config();

// connect to your DB
connectDB();

// middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("*", cors());




const port = process.env.PORT || 8001
app.use('/api/profiles', require("./routes/profileRoutes"))

app.use(errorHandler)


app.listen(process.env.PORT, () => {
  console.log("Server is running on port: " + process.env.PORT);
})


