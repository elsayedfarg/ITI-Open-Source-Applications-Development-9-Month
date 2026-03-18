const APIError = require("../utils/APIError");

const authorize = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new APIError("forbidden", 403);
    }
    next();
  };
};

module.exports = authorize;
