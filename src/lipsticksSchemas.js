const Joi = require("@hapi/joi");

const pathIdSchema = Joi.object().keys({
  id: Joi.number().required(),
});

const bodySchema = Joi.object().keys({
  id: Joi.number().required(),
  brand: Joi.string().required(),
  type: Joi.string().required(),
  color: Joi.string().required(),
});

module.exports = { pathIdSchema, bodySchema };
