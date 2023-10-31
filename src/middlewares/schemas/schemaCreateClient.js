const joi = require('joi');

const schemaCreateClient = joi.object({
  nome: joi.string().min(2).required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'The name field is required',
    'string.empty': 'The name cannot be empty.',
    'string.min': 'The name requires at least 2 characters.',
  }),
  email: joi.string().email().required().messages({
    'string.base': 'Email must be a string',
    'any.required': 'The email field is required',
    'string.empty': 'The email cannot be empty.',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  cpf: joi
    .string()
    .regex(/^[0-9]+$/)
    .required()
    .min(11)
    .max(11)
    .messages({
      'any.required': 'The cpf field is required',
      'string.empty': 'The cpf cannot be empty.',
      'string.min': 'Cpf must be 11 characters.',
      'string.max': 'Cpf must be 11 characters.',
      'string.pattern.base': 'Cpf cannot contains letters',
    }),
});

module.exports = schemaCreateClient;
