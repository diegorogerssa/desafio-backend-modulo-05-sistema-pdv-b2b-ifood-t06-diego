const joi = require('joi');

const produtoSchema = joi.object({
  produto_id: joi.number().min(1).required()
    .messages({
      'any.required': 'The product id field is required',
      'number.base': 'Product id must be a number.',
    }),
  quantidade_produto: joi.number().min(1).required()
    .messages({
      'any.required': 'The product quantity field is required',
      'number.base': 'Product quantity must be a number.',
    }),
});

const schemaRegisterProduct = joi.object({
  cliente_id: joi.number().required().messages({
    'number.base': 'Client id must be a number',
    'any.required': 'The client id field is required',
  }),
  observacao: joi.string().messages({
    'string.base': 'Observation must be a string.',
    'string.empty': 'The observation id cannot be empty.',
  }),
  pedido_produtos: joi.array().items(produtoSchema).min(1).required()
    .messages({
      'any.required': 'The order prodcts id field is required',
      'array.base': 'Order prodcts must be an array.',
      'array.min': 'Order prodcts must contain at least 1 items',
    }),
});

module.exports = schemaRegisterProduct;
