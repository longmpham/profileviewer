const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user");

const registerUser = asyncHandler(async (req,res) => {

  const { username, email, password } = req.body
  console.log(username, email, password)
  // basic check if all empty
  if (!username || !email || !password) {
    res.status(400)
    throw new Error("no username, email or password")
  }

  try {
    const newUser = await new UserModel({username, email, password})
    const result = await newUser.save();
    console.log(result)
    res.json({ message: "register user" })
  } catch (error) {
    res.status(500)
    throw new Error("no username, email or password")
    console.log("there has been an error" + error)
  }

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