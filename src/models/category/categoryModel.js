const knex = require('../../database/knex');

const categoryModel = async () => {
  const categories = await knex.select('descricao').from('categorias');
  return categories;
};

module.exports = categoryModel;
