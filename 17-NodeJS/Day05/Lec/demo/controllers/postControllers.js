const postService = require("../services/postServices");
const APIError = require("../utils/APIError");

// create post
const createPost = async (req, res) => {
  const postData = req.body;
  const userId = req.user.userId;

  const post = await postService.createPost(postData, userId);

  res.status(201).json({
    message: "Post created successfully",
    data: post,
  });
};

// get all posts
const getPosts = async (req, res, next) => {
  const { page, limit } = req.query;

  const userId = req.user.userId;

  const posts = await postService.getPosts({ page, limit, userId });

  res.status(200).json({
    message: "Posts fetched successfully",
    data: posts,
  });
};

// get post by id
const getPostById = async (req, res) => {
  const { postId } = req.params;

  const userId = req.user.userId;

  const post = await postService.getPostById(postId, userId);

  res.status(200).json({
    message: "Post fetched successfully",
    data: post,
  });
};

// update post by id
const updatePost = async (req, res) => {
  const { postId } = req.params;
  const updateData = req.body;
  const userId = req.user.userId;

  const updatedPost = await postService.updatePost(postId, updateData, userId);

  res.status(200).json({
    message: "Post updated successfully",
    data: updatedPost,
  });
};

// delete post by id
const deletePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user.userId;

  const deletedPost = await postService.deletePost(postId, userId);

  res.status(200).json({
    message: "Post deleted successfully",
    data: deletedPost,
  });
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
