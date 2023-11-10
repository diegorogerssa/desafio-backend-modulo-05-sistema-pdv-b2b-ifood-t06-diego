const path = require('path');
const knex = require('../../config/database/knex');
const { deleteImage } = require('../../utils');

const deleteProductModel = async (productId) => {
  const pathImage = await knex('produto_imagem')
    .from('produtos')
    .where('id', productId)
    .first();

  await knex('produtos').where('id', productId).del();

  const url = pathImage.produto_imagem;
  const nomeDoArquivo = path.basename(url);
  await deleteImage(`imagens/${nomeDoArquivo}`);
};

module.exports = deleteProductModel;
