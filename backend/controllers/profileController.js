const { response } = require("express")
const ProfileModel = require("../models/profile")

const getProfile = async (req, res) => {
  // res.status(200).json({ message: "getProfile"})
  const profiles = await ProfileModel.find({})
  try {
    res.status(200).send(profiles)
  } catch (error) {
    res.status(500).send(error)
  }
}

const postProfile = async (req, res) => {
  // create a new instance of profile and save it in the db
  const newProfile = new ProfileModel(req.body)
  
  try {
    const profile = await newProfile.save()
    res.status(200).send(profile)
  } catch (error) {
    res.status(500).send(error)
  }
}

const updateProfile = (req, res) => {
  res.status(200).json({ message: `updateProfile: ${req.params.id}`})
}

const deleteProfile = (req, res) => {
  res.status(200).json({ message: `deleteProfile: ${req.params.id}`})
}

module.exports = {
  getProfile,postProfile,updateProfile,deleteProfile
}