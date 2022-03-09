const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  eyes: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
    required: true,
  },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);
module.exports = ProfileModel