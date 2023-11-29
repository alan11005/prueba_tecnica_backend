const Joi = require('@hapi/joi');

const getcustomersOrdersInDateRangeSchema = Joi.object({
  start: Joi.date().iso().required(),
  end: Joi.date().iso().required(),
  id: Joi.number(),
  name: Joi.string(),
});

module.exports = getcustomersOrdersInDateRangeSchema;