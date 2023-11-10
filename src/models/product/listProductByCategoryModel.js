/* eslint-disable camelcase */
const knex = require('../../config/database/knex');

const listProductCategoryModel = async (category_id) => {
  const products = await knex.select('*')
    .from('produtos')
    .where('categoria_id', category_id);

  return products;
};

module.exports = listProductCategoryModel;
