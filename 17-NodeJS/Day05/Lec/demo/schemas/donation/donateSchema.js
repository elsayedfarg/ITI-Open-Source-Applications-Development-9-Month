const Joi = require("joi");

const donateBody = Joi.object({
  amount: Joi.number().min(3).required(),
});

module.exports = {
  donateSchema: { body: donateBody },
};
