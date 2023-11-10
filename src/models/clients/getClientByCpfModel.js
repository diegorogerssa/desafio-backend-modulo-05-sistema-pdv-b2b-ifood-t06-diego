const knex = require('../../config/database/knex');

const getClientByCpfModel = async (cpf) => {
  const client = await knex.select('*').from('clientes').where('cpf', cpf);
  return client;
};

module.exports = getClientByCpfModel;
