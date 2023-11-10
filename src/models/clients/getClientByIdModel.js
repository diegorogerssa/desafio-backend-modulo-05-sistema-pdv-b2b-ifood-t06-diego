const knex = require('../../config/database/knex');

const getClientByIdModel = async (id) => {
  const user = await knex.select('*').from('clientes').where('id', id).first();
  return user;
};

module.exports = getClientByIdModel;
