const knex = require('../../database/knex');

const listOrderModel = async () => {
  const orders = await knex.select('*').from('pedidos');
  return orders;
};

module.exports = listOrderModel;
