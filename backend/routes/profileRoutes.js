const express = require("express");
const router = express.Router();
const { getProfile,postProfile,updateProfile,deleteProfile } = require("../controllers/profileController")
const  { protect } = require("../middleware/authMiddleware")

router.get("/", protect, getProfile)
router.post("/", protect, postProfile)
router.put("/:id", protect, updateProfile)
router.delete("/:id", protect, deleteProfile)

module.exports = router;