const Post = require("../models/postModel");

// create post
createPost = async (postData) => {
  const { title, content, author, tags, published } = postData;

  const post = await Post.create({
    title,
    content,
    author,
    tags,
    published,
  });

  return post;
};

// get all posts (pagination)
getPosts = async ({ page = 1, limit = 10 }) => {
  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const skip = (pageNum - 1) * limitNum;

  const posts = await Post.find().skip(skip).limit(limitNum);
  const total = await Post.countDocuments();

  return {
    page: pageNum,
    limit: limitNum,
    total,
    data: posts,
  };
};

// get post by id
getPostById = async (postId) => {
  const post = await Post.findOne({ _id: postId });

  if (!post) {
    // throw new Error("Post not found");
  }

  return post;
};

// update post by id
updatePost = async (postId, updateData) => {
  const { title, content, author, tags, published } = updateData;

  const updatedPost = await Post.findOneAndUpdate(
    { _id: postId },
    { title, content, author, tags, published },
    { new: true },
  );

  if (!updatedPost) {
    // throw new Error("Post not found");
  }

  return updatedPost;
};

// delete post by id
deletePost = async (postId) => {
  const deletedPost = await Post.findOneAndDelete({ _id: postId });

  if (!deletedPost) {
    // throw new Error("Post not found");
  }

  return deletedPost;
};

module.exports = { createPost, getPosts, getPostById, updatePost, deletePost };
