// const express = require("express");
const asyncHandler = require("express-async-handler");
const ProfileModel = require("../models/profile");
const UserModel = require("../models/user")

const getProfile = asyncHandler(async (req, res) => {
  // res.status(200).json({ message: "getProfile"})
  const profile = await ProfileModel.find( {user: req.user.id} );
  try {
    res.status(200).send(profile);
  } catch (error) {
    res.status(500);
    throw new Error("Something bad happened...");
  }
})

const postProfile = asyncHandler(async (req, res) => {
  // handle empty case...
  if (Object.keys(req.body).length === 0) {
    throw new Error("your post was empty");
  }

  try {
    // create a new instance of profile and save it in the db
    const newProfile = new ProfileModel({
      user: req.user.id,
      name: req.body.name,
      age: req.body.age,
      eyes: req.body.eyes,
      height: req.body.height,
      weight: req.body.weight,
    });
    const profile = await newProfile.save();
    console.log("new profile:" + profile);
    res.status(200).send(profile);
  } catch (error) {
    res.status(500);
    throw new Error("Something bad happened... " + error);
  }
});

const updateProfile = asyncHandler(async (req, res) => {
  
  const id = req.params.id;
  const profile = await ProfileModel.findById(id)

  // check if it exists
  if (!profile) {
    res.status(400)
    throw new Error("No profile was found")
  }

  try {
    // handle with token now. find the user based on token so that other users cant update
    const user = await UserModel.findById(req.user.id)

    // if this user doesn't exist, error
    if (!user) {
      res.status(401)
      throw new Error("No user found")
    }
    // else if user does exist, but doesnt match... wrong account (not authorized)
    else if (profile.user.toString() !== user.id) {
      res.status(401)
      throw new Error("User not authorized to update")
    }
    // else the ids match! can now update.
    const foundProfile = await ProfileModel.findByIdAndUpdate(id, req.body, {new: true});
    const updatedProfile = await foundProfile.save();
    res.status(200).json(updatedProfile)
  } catch (error) {
    res.status(500);
    throw new Error("Something bad happened... " + error);
  }
})

const deleteProfile = asyncHandler (async (req, res) => {

  const id = req.params.id
  const profile = await ProfileModel.findById(id)
  
  // check for existing id
  if (!profile) {
    res.status(400)
    throw new Error("No profile was found")
  }

  try {
  // handle with token now. find the user based on token so that other users cant update
  const user = await UserModel.findById(req.user.id)

  // if this user doesn't exist, error
  if (!user) {
    res.status(401)
    throw new Error("No user found")
  }
  // else if user does exist, but doesnt match... wrong account (not authorized)
  else if (profile.user.toString() !== user.id) {
    console.log(profile.user.toString(), user.id)
    res.status(401)
    throw new Error("User not authorized to update")
  }
  // else the ids match! can now update.

  await profile.remove()
  // const foundProfile = await ProfileModel.findByIdAndDelete(id)
  res.status(200).json({id: id})
  } catch (error) {
    res.status(401)
    throw new Error("Something bad happened... " + error);
  }
  // res.status(200).json({ message: `deleteProfile: ${req.params.id}` });
});

module.exports = {
  getProfile,
  postProfile,
  updateProfile,
  deleteProfile,
};
