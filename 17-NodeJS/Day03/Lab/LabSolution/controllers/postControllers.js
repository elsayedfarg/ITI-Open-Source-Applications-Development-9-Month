const postService = require("../services/postServices");

// create post
const createPost = async (req, res) => {
  const postData = req.body;

  if (!postData) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const post = await postService.createPost(postData);

  res.status(201).json({
    message: "Post created successfully",
    data: post,
  });
};

// get all posts
const getPosts = async (req, res) => {
  const { page, limit } = req.query;

  const posts = await postService.getPosts({ page, limit });

  res.status(200).json({
    message: "Posts fetched successfully",
    data: posts,
  });
};

// get post by id
const getPostById = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Post id is required" });
  }

  const post = await postService.getPostById(postId);

  res.status(200).json({
    message: "Post fetched successfully",
    data: post,
  });
};

// update post by id
const updatePost = async (req, res) => {
  const { postId } = req.params;
  const updateData = req.body;

  if (!postId || !updateData) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const updatedPost = await postService.updatePost(postId, updateData);

  res.status(200).json({
    message: "Post updated successfully",
    data: updatedPost,
  });
};

// delete post by id
const deletePost = async (req, res) => {
  const { postId } = req.params;

  if (!postId) {
    return res.status(400).json({ message: "Post id is required" });
  }

  await postService.deletePost(postId);

  res.status(200).json({
    message: "Post deleted successfully",
  });
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};
