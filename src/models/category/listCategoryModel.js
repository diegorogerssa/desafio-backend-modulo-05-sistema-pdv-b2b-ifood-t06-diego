const knex = require('../../database/knex');

const listCategoryModel = async () => {
  const categories = await knex.select('descricao').from('categorias');
  return categories;
};

module.exports = listCategoryModel;
