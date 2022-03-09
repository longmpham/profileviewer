const express = require("express");
const router = express.Router();
const { getProfile,postProfile,updateProfile,deleteProfile } = require("../controllers/profileController")

router.get("/", getProfile)
router.post("/", postProfile)
router.put("/:id", updateProfile)
router.delete("/:id", deleteProfile)

module.exports = router;