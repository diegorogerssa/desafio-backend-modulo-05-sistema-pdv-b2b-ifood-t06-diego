const knex = require('../../config/database/knex');

const getProductByIdModel = async (productID) => {
  const product = await knex.select('*').from('produtos').where('id', productID).first();
  return product;
};

module.exports = getProductByIdModel;
