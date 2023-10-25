const knex = require('../../database/knex');

const getUserByIdModel = async (userID) => {
  const user = await knex.select('*').from('usuarios').where('id', userID).first();
  return user;
};

module.exports = getUserByIdModel;
