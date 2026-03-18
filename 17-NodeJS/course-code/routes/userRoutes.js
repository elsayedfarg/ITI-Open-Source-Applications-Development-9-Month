const express = require("express");
const router = express.Router();

const userController = require("../controllers/userControllers");
const schemas = require("../schemas/userSchemas");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");
const restrictTo = require("../middlewares/restrictTo");

router.post("/sign-up", validate(schemas.signUpSchema), userController.signUp);
router.post("/sign-in", validate(schemas.signInSchema), userController.signIn);

router
  .route("/")
  .get(
    authenticate,
    restrictTo(["admin"]),
    validate(schemas.getAllUsersSchema),
    userController.getAllUsers,
  );

router
  .route("/:userId")
  .get(
    authenticate,
    restrictTo(["admin"]),
    validate(schemas.userIdSchema),
    userController.getUserById,
  )
  .patch(
    authenticate,
    restrictTo(["admin"]),
    validate(schemas.updateUserSchema),
    userController.updateUserById,
  )
  .delete(
    authenticate,
    restrictTo(["admin"]),
    validate(schemas.userIdSchema),
    userController.deleteUserById,
  );

module.exports = router;
