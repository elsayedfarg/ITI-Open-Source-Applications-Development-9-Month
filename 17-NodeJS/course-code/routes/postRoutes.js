const express = require("express");
const router = express.Router();

const postController = require("../controllers/postControllers");
const schemas = require("../schemas/postSchemas");
const validate = require("../middlewares/validate");
const authenticate = require("../middlewares/authenticate");

router.use(authenticate);

router
  .route("/")
  .get(validate(schemas.getAllPostsSchema), postController.getAllPosts)
  .post(validate(schemas.createPostSchema), postController.createPost);

router
  .route("/:postId")
  .get(validate(schemas.postIdSchema), postController.getPostById)
  .patch(validate(schemas.updatePostSchema), postController.updatePostById)
  .delete(validate(schemas.postIdSchema), postController.deletePostById);

module.exports = router;
