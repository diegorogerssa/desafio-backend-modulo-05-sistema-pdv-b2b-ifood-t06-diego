/* eslint-disable camelcase */
const knex = require('../../config/database/knex');

const listOrderModel = async (clientId) => {
  let idOrders;
  if (clientId) {
    idOrders = await knex.select('id').from('pedidos').where('cliente_id', clientId);
  } else {
    idOrders = await knex.select('id').from('pedidos');
  }

  const ids = idOrders.map((id) => id.id);

  const listOrder = await Promise.all(
    ids.map(async (id) => {
      const pedido = await knex('pedidos')
        .select('id', 'valor_total', 'observacao', 'cliente_id')
        .where('id', id)
        .first();

      const pedido_produtos = await knex('pedido_produtos')
        .select(
          'id',
          'quantidade_produto',
          'valor_produto',
          'pedido_id',
          'produto_id',
        )
        .where('pedido_id', id);

      return {
        pedido,
        pedido_produtos,
      };
    }),
  );

  return listOrder;
};

module.exports = listOrderModel;
