// const express = require("express");
const asyncHandler = require("express-async-handler");
const ProfileModel = require("../models/profile");

const getProfile = asyncHandler(async (req, res, next) => {
  // res.status(200).json({ message: "getProfile"})
  const profiles = await ProfileModel.find({});
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
  // handle if not found? or do it all in one line!
  try {
    const id = req.params.id;

    const foundProfile = await ProfileModel.findByIdAndUpdate(id, {
      ...req.body,
    });
    const saveProfile = await foundProfile.save();
    res.status(200).send({ foundProfile });
  } catch (error) {
    res.send(error);
  }
})

const deleteProfile = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `deleteProfile: ${req.params.id}` });
});

module.exports = {
  getProfile,
  postProfile,
  updateProfile,
  deleteProfile,
};
