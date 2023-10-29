const knex = require('../../database/knex');

const updateProductModel = async (productData) => {
  const {
    id,
    descricao,
    quantidade_estoque,
    valor,
    categoria_id
  } = productData;

  await knex('produtos')
    .update({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id
    })
    .where('id', id);
};

module.exports = updateProductModel;
