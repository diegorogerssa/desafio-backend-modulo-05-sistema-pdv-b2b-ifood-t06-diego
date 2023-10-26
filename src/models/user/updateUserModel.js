const knex = require('../../database/knex');

const updateUserModel = async (userData) => {
  const {
    id,
    nome,
    email,
    senha,
  } = userData;

  await knex('usuarios')
    .update({ nome, email, senha })
    .where('id', id);
};

module.exports = updateUserModel;
