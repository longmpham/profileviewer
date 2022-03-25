const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
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
  },
  {
    timestamps: true,
  }
);

const ProfileModel = mongoose.model("Profile", ProfileSchema);
module.exports = ProfileModel