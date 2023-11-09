const knex = require('../../config/database/knex');

const detailProductModel = async (productID) => {
  const product = await knex
    .select(
      'p.id',
      'p.descricao',
      'p.quantidade_estoque',
      'p.valor',
      'p.categoria_id',
      'c.descricao as categoria_descricao',
    )
    .from('produtos as p')
    .join('categorias as c', 'p.categoria_id', 'c.id')
    .where('p.id', productID)
    .first();
  return product;
};

module.exports = detailProductModel;
