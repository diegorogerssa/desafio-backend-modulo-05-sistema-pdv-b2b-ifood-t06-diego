const { detailProductModel } = require('../../models');

const detailProductService = async (productID) => {
  const result = await detailProductModel(productID);
  return result;
};

module.exports = detailProductService;
