const knex = require('../../database/knex');

const getUserByIdModel = async (id) => {
  // console.log('5:', id);
  const user = await knex.select('*').from('clientes').where('id', id).first();
  // console.log('6:', user);
  return user;
};

module.exports = getUserByIdModel;
