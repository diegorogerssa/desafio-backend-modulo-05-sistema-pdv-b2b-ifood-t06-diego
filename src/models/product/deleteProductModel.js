const path = require('path');
const knex = require('../../config/database/knex');
const { deleteImage } = require('../../utils');

const deleteProductModel = async (productId) => {
  await knex('produtos').where('id', productId).del();
};

module.exports = deleteProductModel;
