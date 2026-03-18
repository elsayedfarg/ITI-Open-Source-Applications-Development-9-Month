const express = require("express");
const usersController = require("../controllers/userControllers");
const signUpSchema = require("../schemas/signUpSchema");
const signInSchema = require("../schemas/signInSchema");
const getAllUsersSchema = require("../schemas/getAllUsers");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const authorize = require("../middlewares/authorize");

const router = express.Router();

router.post("/sign-up", validate(signUpSchema), usersController.signUp);
router.post("/sign-in", validate(signInSchema), usersController.signIn);

router.get(
  "/",
  validate(getAllUsersSchema),
  authenticate,
  authorize(["admin", "user"]),
  usersController.getUsers,
);
router.get(
  "/:userId",
  authenticate,
  authorize(["admin", "user"]),
  usersController.getUserById,
);
router.patch(
  "/:userId",
  authenticate,
  authorize(["admin", "user"]),
  usersController.updateUser,
);
router.delete(
  "/:userId",
  authenticate,
  authorize(["admin", "user"]),
  usersController.deleteUser,
);

module.exports = router;
