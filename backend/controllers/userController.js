const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user");

const registerUser = asyncHandler(async (req,res) => {
  res.json({ message: "register user" })
})
const loginUser = asyncHandler(async (req,res) => {
  res.json({ message: "login user" })
})
const getMe = asyncHandler(async (req,res) => {
  res.json({ message: "get user" })
})

module.exports = {
  registerUser,
  loginUser,
  getMe
}