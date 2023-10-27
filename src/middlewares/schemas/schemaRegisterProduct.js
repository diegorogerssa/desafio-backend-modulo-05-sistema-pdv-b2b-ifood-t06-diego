const joi = require('joi');

const schemaRegisterProduct = joi.object({
  descricao: joi.string().required().messages({
    'any.required': 'The descricao field is required',
  }),
  quantidade_estoque: joi.number().required().messages({
    'any.required': 'The quantidade_estoque field is required',
  }),
  valor: joi.number().required().messages({
    'any.required': 'The valor field is required',
  }),
  categoria_id: joi.number().required().messages({
    'any.required': 'The categoria_id field is required',
  }),
});

module.exports = schemaRegisterProduct;
