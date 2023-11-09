const knex = require('../../config/database/knex');

const listProductModel = async () => {
  const products = await knex.select('*').from('produtos');
  return products;
};

module.exports = listProductModel;
