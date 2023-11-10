const knex = require('../../config/database/knex');

const registerModel = async (userData) => {
  const { nome, email, encryptedPassword } = userData;
  const user = await knex('usuarios')
    .insert({ nome, email, senha: encryptedPassword })
    .returning(['id', 'nome', 'email']);
  return user;
};

module.exports = registerModel;
