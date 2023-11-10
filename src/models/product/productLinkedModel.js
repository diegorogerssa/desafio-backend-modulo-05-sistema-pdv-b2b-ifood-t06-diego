const knex = require('../../config/database/knex');

const productLinkedModel = async (productId) => {
  const linkedOrders = await knex('pedido_produtos')
    .select('pedido_id')
    .where('produto_id', productId);

  return linkedOrders.length > 0;
};

module.exports = productLinkedModel;
