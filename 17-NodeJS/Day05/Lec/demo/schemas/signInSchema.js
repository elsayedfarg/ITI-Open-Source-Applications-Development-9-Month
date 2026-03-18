const Joi = require("joi");

const signInBody = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Request body is required",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
}).required();

const signInSchema = {
  body: signInBody,
};

module.exports = signInSchema;
