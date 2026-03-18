const User = require("../models/userModel");

// create user
createUser = async (userData) => {
  const { name, email, password, age } = userData;

  const user = await User.create({
    name,
    email,
    password,
    age,
  });

  return user;
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

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
