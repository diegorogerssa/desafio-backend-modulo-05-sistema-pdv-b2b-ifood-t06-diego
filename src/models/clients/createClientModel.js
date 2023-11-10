const knex = require('../../config/database/knex');

const createClientModel = async (clientData) => {
  const { nome, email, cpf } = clientData;
  const client = await knex('clientes').insert({ nome, email, cpf }).returning('*');

  return client;
};

module.exports = createClientModel;
