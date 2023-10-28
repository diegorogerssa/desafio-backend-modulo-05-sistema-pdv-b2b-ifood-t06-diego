const { listProductModel } = require('../../models');

const listProductService = async (category_id) => {
  const products = await listProductModel();
  return products;
};

module.exports = listProductService;
