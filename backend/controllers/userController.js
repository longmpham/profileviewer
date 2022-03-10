const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user");

const registerUser =  (req,res) => {
  res.json({ message: "register user" })
}
const loginUser =  (req,res) => {
  res.json({ message: "login user" })
}
const getMe =  (req,res) => {
  res.json({ message: "get user" })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}