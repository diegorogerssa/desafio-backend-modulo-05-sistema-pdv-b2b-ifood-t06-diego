/* eslint-disable camelcase */
const knex = require('../../config/database/knex');
const { uploadImages } = require('../../utils');

const updateProductModel = async (productData, productImage, defaultImage) => {
  const {
    id,
    descricao,
    quantidade_estoque,
    valor,
    categoria_id,
  } = productData;

  let url;

  if (productImage) {
    const imgUrl = await uploadImages(productImage);
    url = imgUrl;
  } else {
    url = defaultImage;
  }

  await knex('produtos')
    .update({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id,
      produto_imagem: url,
    })
    .where('id', id);
};

module.exports = updateProductModel;
