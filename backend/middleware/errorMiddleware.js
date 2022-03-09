// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500

//   res.status(statusCode).json({
//     message: err.messagve,
//     stack: process.env.NODE_ENV === "production" ? undefined : "err.stack"
//   })
// }


// module.exports = {
//   errorHandler,
// }