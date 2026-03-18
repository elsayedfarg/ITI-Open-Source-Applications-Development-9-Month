const Joi = require("joi");

const donateSchema = {
  body: Joi.object({
    amount: Joi.number().min(5).required(),
  }).required(),
};

module.exports = donateSchema;
