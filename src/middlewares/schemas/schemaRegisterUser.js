const joi = require('joi');

const schemaRegisterUser = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'The name field is required',
  }),
  email: joi.string().email().required().messages({
    'any.required': 'The email field is required',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  senha: joi.string().required().messages({
    'any.required': 'The senha field is required',
  }),
});

module.exports = schemaRegisterUser;
