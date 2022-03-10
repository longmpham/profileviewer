const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user");
const { restart } = require("nodemon");

const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  // basic check if all empty
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("no username, email or password");
  }
  // check if email exists, stop (email is unique)
  const emailExists = await UserModel.findOne({ email });
  if (emailExists) {
    console.log("email exists");
    res.status(400);
    throw new Error("email already exists");
  }

  // hash password using bcrypt
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    // create the user with the new hashed password and return it, otherwise, something went wrong.
    const newUser = await new UserModel({
      username,
      email,
      password: hashedPassword,
    });
    if (newUser) {
      const result = await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400);
      throw new Error("Invalid registration");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong..." + error);
  }
});
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login user" });
});
const getMe = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  console.log("" + username + email + password);
  try {
    // check user/email
    const foundUser = await UserModel.findOne({ email });

    // check password match
    console.log("found user: " + foundUser);
    const passwordMatch = await bcrypt.compare(password, foundUser.password)
    if(foundUser && passwordMatch) {
      console.log("email and passwords match")
      res.json({
        _id: foundUser._id,
        username: foundUser.username,
        email: foundUser.email,
      });

    } else {
      res.status(400);
      throw new Error("Invalid Credentials");
    }

  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong..." + error);
  }
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
