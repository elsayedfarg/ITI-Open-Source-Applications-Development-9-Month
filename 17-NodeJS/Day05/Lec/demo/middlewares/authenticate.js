const jwt = require("jsonwebtoken");
const util = require("util");
const APIError = require("../utils/APIError");
const jwtVerify = util.promisify(jwt.verify);
const authenticate = async (req, res, next) => {
  // console.log("Authorization header:", req.headers.authorization);

  try {
    const tokenData = req.headers.authorization;
    const token = tokenData.split(" ")[1];
    const decodedData = await jwtVerify(token, process.env.JWT_SECRET);
    console.log(decodedData);
    req.user = { userId: decodedData.id, role: decodedData.role };
    next();
  } catch (e) {
    throw new APIError("unauthorized", 401);
  }
};

module.exports = authenticate;
