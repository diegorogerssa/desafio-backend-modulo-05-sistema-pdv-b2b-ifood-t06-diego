const knex = require('../../database/knex');

const listOrderByClientModel = async (clientId) => {
  const orders = await knex.select('*')
    .from('pedidos')
    .where('cliente_id', clientId);

  return orders;
};

module.exports = listOrderByClientModel;
