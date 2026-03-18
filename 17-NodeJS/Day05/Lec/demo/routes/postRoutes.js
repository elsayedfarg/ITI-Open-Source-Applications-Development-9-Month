const express = require("express");
const postControllers = require("../controllers/postControllers");
const authenticate = require("../middlewares/authenticate");
const validate = require("../middlewares/validate");
const {
  createPostSchema,
  getPostsSchema,
  updatePostSchema,
  postIdSchema,
} = require("../schemas/postSchemas");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validate(createPostSchema),
  postControllers.createPost,
);

router.get(
  "/",
  authenticate,
  validate(getPostsSchema),
  postControllers.getPosts,
);

router.get(
  "/:postId",
  authenticate,
  validate(postIdSchema),
  postControllers.getPostById,
);

router.patch(
  "/:postId",
  authenticate,
  validate(updatePostSchema),
  postControllers.updatePost,
);

router.delete(
  "/:postId",
  authenticate,
  validate(postIdSchema),
  postControllers.deletePost,
);

module.exports = router;
