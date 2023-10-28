const joi = require('joi');

const schemaCreateClient = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'The name field is required',
  }),
  email: joi.string().email().required().messages({
    'any.required': 'The email field is required',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  cpf: joi.string().required().min(8).max(8)
    .messages({
      'any.required': 'The senha field is required',
    }),
});

module.exports = schemaCreateClient;
