const knex = require('../../config/database/knex');

const getClientByEmailModel = async (email) => {
  const client = await knex.select('*').from('clientes').where('email', email);
  return client;
};

module.exports = getClientByEmailModel;
