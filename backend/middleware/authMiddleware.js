const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const UserModel = require("../models/user")

const protect = asyncHandler( async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // get the token from the header
      // Bearer<SPACE>KEY
      // second index [1]...
      token = req.headers.authorization.split(" ")[1]
      // verify the token
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await UserModel.findById(decodedToken.id).select("-password")
      
      // done, now call next middleware
      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error("Not authorized")
    }
  }
  if (!token) {
    res.status(401)
    throw new Error("Not authorized, no token found")
  }

})

module.exports = { protect }