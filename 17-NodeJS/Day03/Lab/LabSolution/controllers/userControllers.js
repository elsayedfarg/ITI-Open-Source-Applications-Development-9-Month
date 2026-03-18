const userService = require("../services/userServices");
const APIError = require("../utils/APIError");

// create user
const createUser = async (req, res) => {
  const { name, email, password, age } = req.body;
  if (!name || !name.trim() || !email || !email.trim() || !age || !password) {
    throw new APIError("All fields are required", 400);
  }

  const user = await userService.createUser({ name, email, password, age });

  res.status(201).json({
    message: "User created successfully",
    data: user,
  });
};

// get all users
const getUsers = async (req, res) => {
  const { page, limit } = req.query;

  const users = await userService.getUsers({ page, limit });

  if (!users || users.length === 0) {
    throw new APIError("No users found", 404);
  }

  res.status(200).json({
    message: "Users fetched successfully",
    data: users,
  });
};

// get user by id
const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new APIError("User ID is required", 400);
  }

  const user = await userService.getUserById(userId);

  if (!user) {
    throw new APIError("User not found", 404);
  }

  res.status(200).json({
    message: "User fetched successfully",
    data: user,
  });
};

// update user by id
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateData = req.body;

  if (!userId) {
    throw new APIError("User ID is required", 400);
  }

  if (!updateData || Object.keys(updateData).length === 0) {
    throw new APIError("Update data is required", 400);
  }

  const updatedUser = await userService.updateUser(userId, updateData);

  if (!updatedUser) {
    throw new APIError("User not found", 404);
  }

  res.status(200).json({
    message: "User updated successfully",
    data: updatedUser,
  });
};

// delete user by id
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new APIError("User ID is required", 400);
  }

  const deleted = await userService.deleteUser(userId);

  if (!deleted) {
    throw new APIError("User not found", 404);
  }

  res.status(200).json({
    message: "User deleted successfully",
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
