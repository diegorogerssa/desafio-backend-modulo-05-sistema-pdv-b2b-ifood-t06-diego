const knex = require('../../database/knex');

const deleteProductModel = async (productId) => {
  await knex('produtos').where('id', productId).del();
};

module.exports = deleteProductModel;
