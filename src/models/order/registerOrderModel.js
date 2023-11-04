/* eslint-disable camelcase */
const knex = require('../../database/knex');

const registerOrderModel = async (clientId, observation, total, product) => {
  const transaction = await knex.transaction();
  try {
    const [pedido] = await transaction('pedidos')
      .insert({
        cliente_id: clientId,
        observacao: observation,
        valor_total: total,
      })
      .returning(['id', 'cliente_id', 'observacao', 'valor_total']);

    const newProductOrder = product.map((productOrder) => ({
      pedido_id: pedido.id,
      produto_id: productOrder.produto_id,
      quantidade_produto: productOrder.quantidade_produto,
      valor_produto: productOrder.valor,
    }));
    const pedido_produtos = await transaction('pedido_produtos').insert(newProductOrder).returning('*');

    await transaction.commit();
    return { pedido, pedido_produtos };
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

module.exports = registerOrderModel;
