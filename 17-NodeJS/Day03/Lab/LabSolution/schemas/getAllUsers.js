const getUsersQuery = Joi.object({
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(5),
}).required();

const getUsersSchema = {
  query: getUsersQuery,
};

module.exports = getUsersSchema;
