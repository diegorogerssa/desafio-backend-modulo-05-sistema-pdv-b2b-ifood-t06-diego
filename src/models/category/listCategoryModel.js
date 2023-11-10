const knex = require('../../config/database/knex');

const listCategoryModel = async () => {
  const categories = await knex.select('*').from('categorias');
  return categories;
};

module.exports = listCategoryModel;
