const knex = require('../../database/knex');

const listClientsModel = async () => {
  const clients = await knex.select('*').from('clientes');
  return clients;
};

module.exports = listClientsModel;
