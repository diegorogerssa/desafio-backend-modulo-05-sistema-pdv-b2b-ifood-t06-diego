const knex = require('../../database/knex');

const getUserByIdModel = async (id) => {
  const user = await knex.select('*').from('usuarios').where('id', id);
  return user;
};

module.exports = getUserByIdModel;
