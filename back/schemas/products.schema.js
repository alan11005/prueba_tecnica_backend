const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {getProductSchema }