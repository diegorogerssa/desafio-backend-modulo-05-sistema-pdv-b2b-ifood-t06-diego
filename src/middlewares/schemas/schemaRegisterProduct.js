const joi = require('joi');

const schemaRegisterProduct = joi.object({
  descricao: joi.string().required().messages({
    'string.base': 'Description must be a string',
    'any.required': 'The description field is required',
    'string.empty': 'The description cannot be empty.',
    'string.min': 'The description requires at least 2 characters.',
  }),
  quantidade_estoque: joi.number().required().messages({
    'any.required': 'The stock quantity field is required',
    'number.base': 'Stock quantity must be a number',
  }),
  valor: joi.number().required().messages({
    'any.required': 'The value field is required',
    'number.base': 'The value cannot be empty.',
  }),
  categoria_id: joi.number().required().messages({
    'any.required': 'The category id field is required',
    'number.base': 'The category id cannot be empty.',
  }),
});

module.exports = schemaRegisterProduct;
