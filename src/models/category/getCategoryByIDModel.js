const knex = require('../../config/database/knex');

const getCategoryByIDModel = async (categoryID) => {
  const category = await knex.select('*').from('categorias').where('id', categoryID).first();
  return category;
};

module.exports = getCategoryByIDModel;
