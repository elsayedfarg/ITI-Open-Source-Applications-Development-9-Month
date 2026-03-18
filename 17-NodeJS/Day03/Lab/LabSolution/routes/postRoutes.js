const express = require("express");
const postControllers = require("../controllers/postControllers");

const router = express.Router();

router.post("/", postControllers.createPost);

router.get("/", postControllers.getPosts);

router.get("/:postId", postControllers.getPostById);

router.patch("/:postId", postControllers.updatePost);

router.delete("/:postId", postControllers.deletePost);

module.exports = router;
