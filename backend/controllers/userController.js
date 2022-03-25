const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/user");

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
        token: generateToken(newUser._id),
      });
    } else {
      res.status(400);
      throw new Error("Invalid registration");
    }
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong... " + error);
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // check if email password is empty
  if (!email || !password) {
    res.status(400);
    throw new Error("email or password missing");
  }

  try {
    // check if email exists in db
    const foundUser = await UserModel.findOne({ email });
    if (!foundUser) {
      res.status(400);
      throw new Error("no email found");
    } else {
      // check password match
      const passwordMatch = await bcrypt.compare(password, foundUser.password);
      if (foundUser && passwordMatch) {
        // we have a match! now log in
        res.status(200).send({
          _id: foundUser._id,
          username: foundUser.username,
          email: foundUser.email,
          token: generateToken(foundUser._id),
        });
      } else {
        res.status(400);
        throw new Error("Password doesn't match");
      }
    }
  } catch (error) {
    res.status(500);
    throw new Error("Something went wrong... " + error);
  }
});

const getMe = asyncHandler(async (req, res) => {
  // Get the user ID found from the token from middleware grabbed by the Bearer Auth header.
  const { _id, username, email } = await UserModel.findById(req.user.id)

  // send back the user!
  res.status(200).json({
    id: _id,
    username: username,
    email: email,
  })
});

const generateToken = (id) => {
  console.log(`JWT for user: ${id}`)
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
