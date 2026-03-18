const Post = require("../models/postModel");
const APIError = require("../utils/APIError");

// create post
createPost = async (postData, userId) => {
  const { title, content, author, tags, published } = postData;
  const post = await Post.create({
    userId,
    title,
    content,
    author,
    tags,
    published,
  });

  return post;
};

// get all posts (pagination)
getPosts = async ({ page = 1, limit = 10, userId }) => {
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const posts = await Post.find()
    .skip(skip)
    .limit(limitNum)
    .populate("userId", "name email")
    .lean(); // convert mongoose to js objects

  const postsWithOwnerFlag = posts.map((post) => ({
    ...post,
    isOwner: post.userId._id === userId,
  }));
  const total = await Post.countDocuments();

  return {
    page: pageNum,
    limit: limitNum,
    total,
    data: postsWithOwnerFlag,
  };
};

// get post by id
const getPostById = async (postId, userId) => {
  const post = await Post.findById(postId)
    .populate("userId", "name email")
    .lean();

  if (!post) {
    return null;
  }

  const isAuthor = post.userId._id.toString() === userId;

  if (!isAuthor) {
    throw new APIError("User is not the author", 403);
  }

  post.isOwner = isAuthor;

  return post;
};

const updatePost = async (postId, updateData, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    return null;
  }

  const isAuthor = post.userId._id.toString() === userId;

  if (!isAuthor) {
    throw new APIError("User is not the author", 403);
  }

  const { title, content, author, tags, published } = updateData;

  if (title !== undefined) post.title = title;
  if (content !== undefined) post.content = content;
  if (author !== undefined) post.author = author;
  if (tags !== undefined) post.tags = tags;
  if (published !== undefined) post.published = published;

  await post.save();

  return post;
};

// delete post by id
const deletePost = async (postId, userId) => {
  const post = await Post.findById(postId);

  if (!post) {
    return null;
  }

  const isAuthor = post.userId._id.toString() === userId;
  if (!isAuthor) {
    throw new APIError("User is not the author", 403);
  }

  await Post.deleteOne({ _id: postId });

  return post;
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
