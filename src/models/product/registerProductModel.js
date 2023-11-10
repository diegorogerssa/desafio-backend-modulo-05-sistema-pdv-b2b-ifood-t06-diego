/* eslint-disable camelcase */
const knex = require('../../config/database/knex');
const { uploadImages } = require('../../utils');

const registerProductModel = async (productData, productImage) => {
  const {
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
  } = productData;

  const url = await uploadImages(productImage);

  const product = await knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
      produto_imagem: url,
    })
    .returning([
      'id',
      'descricao',
      'quantidade_estoque',
      'valor',
      'categoria_id',
      'produto_imagem',
    ]);

  return product;
};

module.exports = registerProductModel;
