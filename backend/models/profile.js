const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  eyes: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
module.exports = ProfileModel