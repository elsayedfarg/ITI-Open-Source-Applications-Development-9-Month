const postService = require("../services/postServices");
const APIError = require("../utils/APIError");
const sendResponse = require("../utils/sendResponse");

const createPost = async (req, res) => {
  const newPost = await postService.createPost(req.body, req.user.userId);

  sendResponse(res, newPost, 201);
};

const getAllPosts = async (req, res) => {
  const { posts: postsWithOwnership, pagination } =
    await postService.getAllPosts(req.query, req.user.userId);

  sendResponse(res, postsWithOwnership, 200, {
    results: postsWithOwnership.length,
    pagination,
  });
};

const getPostById = async (req, res) => {
  const post = await postService.getPostById(
    req.params.postId,
    req.user.userId,
  );

  if (!post) {
    throw new APIError("Post not found", 404);
  }

  sendResponse(res, post);
};

const updatePostById = async (req, res) => {
  const updatedPost = await postService.updatePostById(
    req.params.postId,
    req.body,
    req.user.userId,
  );

  if (!updatedPost) {
    throw new APIError("Post not found", 404);
  }

  sendResponse(res, updatedPost);
};

const deletePostById = async (req, res) => {
  const deletedPost = await postService.deletePostById(
    req.params.postId,
    req.user.userId,
  );

  if (!deletedPost) {
    throw new APIError("Post not found", 404);
  }

  res.status(200).json({
    status: "success",
    message: "Post deleted successfully",
  });
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
