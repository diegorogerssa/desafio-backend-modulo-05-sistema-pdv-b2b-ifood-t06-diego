const joi = require('joi');

const schemaUpdateClient = joi.object({
  nome: joi.string().required().messages({
    'any.required': 'The name field is required',
  }),
  email: joi.string().email().required().messages({
    'any.required': 'The email field is required',
    'string.email': 'Invalid email address. Please enter a valid email address',
  }),
  cpf: joi.string().required().min(11).max(11)
    .messages({
      'any.required': 'The senha field is required',
    }),
  cep: joi.string().allow('').min(8).max(8)
    .trim()
    .default(null)
    .messages({
      'any.required': 'The cep field is required',
    }),
  rua: joi.string().allow('').min(2).trim()
    .default(null)
    .messages({
      'any.required': 'The rua field is required',
    }),
  numero: joi.string().allow('').min(1).trim()
    .default(null)
    .messages({
      'any.required': 'The numero field is required',
    }),
  bairro: joi.string().allow('').trim().min(2)
    .default(null)
    .messages({
      'any.required': 'The bairro field is required',
    }),
  cidade: joi.string().allow('').trim().min(2)
    .default(null)
    .messages({
      'any.required': 'The cidade field is required',
    }),
  estado: joi.string().allow('').min(2).max(2)
    .trim()
    .default(null)
    .messages({
      'any.required': 'The numero field is required',
    }),
});

module.exports = schemaUpdateClient;
