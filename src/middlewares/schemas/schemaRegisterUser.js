const joi = require('joi');

const schemaRegisterUser = joi.object({
  nome: joi.string().min(2).required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'The name field is required.',
    'string.empty': 'The name cannot be empty.',
    'string.min': 'The name requires at least 2 characters.',
  }),
  email: joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'any.required': 'The email field is required',
    'string.empty': 'The email cannot be empty.',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  senha: joi.string().required().messages({
    'any.required': 'The password field is required',
    'string.empty': 'The password cannot be empty.',
  }),
});

module.exports = schemaRegisterUser;
