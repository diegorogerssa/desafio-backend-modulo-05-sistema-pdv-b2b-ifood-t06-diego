const joi = require('joi');

const schemaUpdateClient = joi.object({
  nome: joi.string().required().messages({
    'string.base': 'Name must be a string',
    'any.required': 'The name field is required',
    'string.empty': 'The name cannot be empty.',
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
  cep: joi
    .string()
    .regex(/[0-9]+$/)
    .min(8)
    .max(8)
    .trim()
    .default(null)
    .messages({
      'string.min': 'Cep must be 8 characters.',
      'string.max': 'Cep must be 8 characters.',
      'string.empty': 'The cpf cannot be empty.',
      'string.base': 'Cep must be a string',
    }),
  rua: joi
    .string()
    .min(2)
    .trim()
    .default(null)
    .messages({
      'string.empty': 'The street cannot be empty.',
      'string.base': 'Street must be a string',
    }),
  numero: joi
    .string()
    .min(1)
    .trim()
    .default(null)
    .messages({
      'string.empty': 'The number cannot be empty.',
      'string.base': 'Number must be a string',
    }),
  bairro: joi
    .string()
    .trim()
    .min(2)
    .default(null)
    .messages({
      'string.empty': 'The neighborhood cannot be empty.',
      'string.base': 'Neighborhood must be a string',
      'string.min': 'Neighborhood length must be at least 2 characters long',
    }),
  cidade: joi
    .string()
    .trim()
    .min(2)
    .default(null)
    .messages({
      'string.empty': 'The city cannot be empty.',
      'string.base': 'City must be a string',
      'string.min': 'City must be at least 2 characters.',
    }),
  estado: joi
    .string()
    .regex(/^[a-z + A-Z]+$/)
    .min(2)
    .max(2)
    .trim()
    .default(null)
    .messages({
      'string.empty': 'The state cannot be empty.',
      'string.base': 'State must be a string',
      'string.min': 'State must be 2 characters.',
      'string.max': 'State must be 2 characters.',
      'string.pattern.base': 'State cannot contains numbers',
    }),
});

module.exports = schemaUpdateClient;
