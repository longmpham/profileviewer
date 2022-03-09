const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongooseConn = await mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected to DB")
  } catch (error) {
    console.log("unable to connect to DB: " + error)
  }
}

module.exports = connectDB;