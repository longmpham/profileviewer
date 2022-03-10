const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongooseConn = await mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Connceted to DB: ${mongooseConn.connection.host}`)
  } catch (error) {
    console.log("unable to connect to DB: " + error)
    process.exit(1)
  }
}

module.exports = connectDB