const Joi = require("joi");

const createPostBody = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).optional(),
  published: Joi.boolean().optional(),
});

const getPostsQuery = Joi.object({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(10),
});

const updatePostBody = Joi.object({
  title: Joi.string().optional(),
  content: Joi.string().optional(),
  author: Joi.string().optional(),
  tags: Joi.array().items(Joi.string()).optional(),
  published: Joi.boolean().optional(),
}).min(1); // at least one field must be provided

const postIdParam = Joi.object({
  postId: Joi.string().hex().length(24).required(),
});

module.exports = {
  createPostSchema: { body: createPostBody },
  getPostsSchema: { query: getPostsQuery },
  updatePostSchema: { body: updatePostBody, params: postIdParam },
  postIdSchema: { params: postIdParam },
};
