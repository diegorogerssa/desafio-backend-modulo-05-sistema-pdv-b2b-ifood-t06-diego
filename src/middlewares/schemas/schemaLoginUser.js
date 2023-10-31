const joi = require('joi');

const schemaLoginUser = joi.object({
  email: joi.string().email().required().messages({
    'any.required': 'The email field is required',
    'string.empty': 'The email cannot be empty.',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  senha: joi.string().required().messages({
    'any.required': 'The senha field is required',
    'string.empty': 'The password cannot be empty.',
  }),
});

module.exports = schemaLoginUser;
