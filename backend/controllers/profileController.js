// const express = require("express");
const asyncHandler = require("express-async-handler");
const ProfileModel = require("../models/profile");

const getProfile = asyncHandler(async (req, res, next) => {
  // res.status(200).json({ message: "getProfile"})
  const profiles = await ProfileModel.find();
  try {
    res.status(200).send(profiles);
  } catch (error) {
    res.status(500);
    return next(new Error(error));
  }
})

// const getOneProfile =

const postProfile = asyncHandler(async (req, res, next) => {
  // handle empty case...
  if (Object.keys(req.body).length === 0) {
    return next(new Error("your post was empty"));
  }

  try {
    // create a new instance of profile and save it in the db
    const newProfile = new ProfileModel(req.body);
    const profile = await newProfile.save();
    console.log("new profile:" + profile);
    res.status(200).send(profile);
  } catch (error) {
    res.status(500).send(error);
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
    const foundProfile = await ProfileModel.findByIdAndUpdate(id, req.body, {new: true});
    const updatedProfile = await foundProfile.save();
    res.status(200).json(updatedProfile)
  } catch (error) {
    res.send(error);
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
    await profile.remove()
    // const foundProfile = await ProfileModel.findByIdAndDelete(id)
    res.status(200).json({id: id})
  } catch (error) {
    res.send(error)
  }
  // res.status(200).json({ message: `deleteProfile: ${req.params.id}` });
});

module.exports = {
  getProfile,
  postProfile,
  updateProfile,
  deleteProfile,
};
