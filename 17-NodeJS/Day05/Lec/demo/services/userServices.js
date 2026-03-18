const util = require("util");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const APIError = require("../utils/APIError");

// return promisified version
const jwtSign = util.promisify(jwt.sign);

const signUp = async (userData) => {
  const { email, password } = userData;

  // check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new APIError("User already exists", 400);
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user with hashed password
  const user = await User.create({
    ...userData,
    password: hashedPassword,
    role: "user",
  });

  return user;
};

const signIn = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new APIError("Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new APIError("Invalid email or password", 401);
  }

  const token = await jwtSign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

  return {
    token,
    tokenExpiry: new Date(Date.now() + 60 * 60 * 1000) + 1,
    userType: user.role,
  };
};

// get all users (pagination)
getUsers = async ({ page = 1, limit = 5 }) => {
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const users = await User.find().skip(skip).limit(limitNum);

  const total = await User.countDocuments();

  return {
    page: pageNum,
    limit: limitNum,
    total,
    data: users,
  };
};

// get user by id
getUserById = async (userId) => {
  const user = await User.findOne({ _id: userId }, { password: 0 });

  if (!user) {
    // throw new Error("User not found");
  }

  return user;
};

// update user by id
updateUser = async (userId, updateData) => {
  const { name, email } = updateData;

  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { name, email },
    { new: true },
  );

  if (!updatedUser) {
    // throw new Error("User not found");
  }

  return updatedUser;
};

// delete user by id
deleteUser = async (userId) => {
  const deletedUser = await User.findOneAndDelete({ _id: userId });

  if (!deletedUser) {
    // throw new Error("User not found");
  }

  return deletedUser;
};

module.exports = {
  signUp,
  signIn,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
