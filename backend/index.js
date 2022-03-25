const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.js");
const { errorHandler } = require("./middleware/errorMiddleware.js")
const dotenv = require("dotenv").config();

// connect to your DB
const port = process.env.PORT || 8001
connectDB();

// middleware
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("*", cors());

// routes
app.use('/api/profiles', require("./routes/profileRoutes"))
app.use('/api/users', require("./routes/userRoutes"))

// error handler
app.use(errorHandler)


app.listen(process.env.PORT, () => {
  console.log("Server is running on port: " + process.env.PORT);
})