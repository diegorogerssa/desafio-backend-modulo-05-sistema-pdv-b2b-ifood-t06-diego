const knex = require('../../database/knex');

const createClientModel = async (clientData) => {
  const { nome, email, cpf } = clientData;
  const client = knex('clientes').insert({ nome, email, cpf }).returning('*');
  return client;
};

module.exports = createClientModel;
