const mongoose = require("mongoose");

// schema
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [String],
    },
    published: {
      type: Boolean,
      default: false,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
