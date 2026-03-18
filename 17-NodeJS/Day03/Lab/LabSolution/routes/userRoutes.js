const express = require("express");
const usersController = require("../controllers/userControllers");
const schemas = require("../schemas");

const router = express.Router();

router.post("/", schemas.createUserSchema, usersController.createUser);

router.get("/", usersController.getUsers);

router.get("/:userId", usersController.getUserById);

router.patch("/:userId", usersController.updateUser);

router.delete("/:userId", usersController.deleteUser);

module.exports = router;
