const knex = require('../../config/database/knex');

const getUserByEmailModel = async (email) => {
  const user = await knex.select('*').from('usuarios').where('email', email);
  return user;
};

module.exports = getUserByEmailModel;
