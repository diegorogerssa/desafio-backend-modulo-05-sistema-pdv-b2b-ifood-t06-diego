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
    .allow('')
    .min(8)
    .max(8)
    .trim()
    .default(null)
    .messages({
      'any.required': 'The cep field is required',
      'string.min': 'Cep must be 8 characters.',
      'string.max': 'Cep must be 8 characters.',
    }),
  rua: joi.string().allow('').min(2).trim().default(null).messages({
    'any.required': 'The rua field is required',
  }),
  numero: joi.string().allow('').min(1).trim().default(null).messages({
    'any.required': 'The numero field is required',
  }),
  bairro: joi.string().allow('').trim().min(2).default(null).messages({
    'any.required': 'The bairro field is required',
  }),
  cidade: joi.string().allow('').trim().min(2).default(null).messages({
    'any.required': 'The cidade field is required',
  }),
  estado: joi.string().allow('').min(2).max(2).trim().default(null).messages({
    'any.required': 'The numero field is required',
  }),
});

module.exports = schemaUpdateClient;
