const knex = require('../../database/knex');

const registerProductModel = async (productData) => {
  const {
    descricao,
    quantidade_estoque,
    valor,
    categoria_id
  } = productData;

  const product = await knex('produtos')
    .insert({
      descricao,
      quantidade_estoque,
      valor,
      categoria_id
    })
    .returning([
      'id',
      'descricao',
      'quantidade_estoque',
      'valor',
      'categoria_id'
    ]);

  return product;
};

module.exports = registerProductModel;
