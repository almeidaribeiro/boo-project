// const Joi = require("@hapi/joi");
const { pathIdSchema, bodySchema } = require("./lipsticksSchemas");

const lipsticksPathValidator = async (req, res, next) => {
  const { error } = pathIdSchema.validate(req.params, {
    abortEarly: false,
  });
  if (error) {
    return res.status(400).json({ error });
  }
  next();
};

const lipsticksValidator = async (req, res, next) => {
  const { error } = bodySchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ error });
  next();
};

module.exports = { lipsticksPathValidator, lipsticksValidator };
