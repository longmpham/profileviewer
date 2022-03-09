const getProfile = (req, res) => {
  res.status(200).json({ message: "getProfile"})
}

const postProfile = (req, res) => {
  res.status(200).json({ message: "postProfile"})
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