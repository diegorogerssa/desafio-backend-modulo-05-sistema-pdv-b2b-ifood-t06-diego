const knex = require('../../database/knex');

const getUserByIdModel = async (id) => {
  const user = await knex.select('*').from('clientes').where('id', id).first();
  return user;
};

module.exports = getUserByIdModel;
