const joi = require('joi');

const schemaLoginUser = joi.object({
  email: joi.string().email().required().messages({
    'any.required': 'The email field is required',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  senha: joi.string().required().messages({
    'any.required': 'The senha field is required',
  }),
});

module.exports = schemaLoginUser;
