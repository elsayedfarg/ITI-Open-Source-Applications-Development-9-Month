const APIError = require("../utils/APIError");

module.exports = (err, req, res, next) => {
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      message: err.message,
      success: false,
      isClientError: err.isClientError,
    });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "invalid format for mongo id",
      success: false,
      isClientError: true,
    });
  }
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "validation error",
      success: false,
      isClientError: true,
    });
  }
  res
    .status(500)
    .json({ message: err.message, success: false, isClientError: false });
};
