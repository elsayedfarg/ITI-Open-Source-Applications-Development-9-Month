const Post = require("../models/postModel");
const APIError = require("../utils/APIError");

const createPost = async (postData, userId) => {
  return await Post.create({ ...postData, userId });
};
const getAllPosts = async ({ page = 1, limit = 10 }, userId) => {
  const skip = (parseInt(page) - 1) * parseInt(limit);

  const [posts, totalPosts] = await Promise.all([
    Post.find()
      .populate("userId", "name email")
      .skip(skip)
      .limit(parseInt(limit)),
    Post.countDocuments(),
  ]);

  const postsWithOwnership = posts.map((post) => {
    const postObj = post.toObject();
    postObj.isOwner = post.userId._id.toString() === userId.toString();
    return postObj;
  });

  const pagination = {
    page: parseInt(page),
    limit: parseInt(limit),
    totalPages: Math.ceil(totalPosts / limit),
    totalPosts,
  };

  return { posts: postsWithOwnership, pagination };
};

const getPostById = async (postId, userId) => {
  const post = await Post.findById(postId).populate("userId", "name email");

  if (!post) return null;

  const postObj = post.toObject();
  postObj.isOwner = post.userId._id.toString() === userId.toString();

  return postObj;
};

const updatePostById = async (postId, postData, userId) => {
  const post = await Post.findById(postId);

  if (!post) return null;

  if (post.userId.toString() !== userId.toString()) {
    throw new APIError("You are not allowed to update this post", 403);
  }

  Object.assign(post, postData);
  await post.save();

  return post;
};

const deletePostById = async (postId, userId) => {
  const post = await Post.findById(postId);

  if (!post) return null;

  if (post.userId.toString() !== userId.toString()) {
    throw new APIError("You are not allowed to delete this post", 403);
  }

  await post.deleteOne();
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePostById,
  deletePostById,
};
