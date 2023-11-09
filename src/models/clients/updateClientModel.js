const knex = require('../../config/database/knex');

const updateClientModel = async (clientData, id) => {
  const {
    nome,
    email,
    cpf,
    cep,
    rua,
    numero,
    bairro,
    cidade,
    estado,
  } = clientData;

  const updateClient = await knex('clientes')
    .update({
      nome, email, cpf, cep, rua, numero, bairro, cidade, estado,
    })
    .where('id', id).returning('*');

  return updateClient;
};

module.exports = updateClientModel;
