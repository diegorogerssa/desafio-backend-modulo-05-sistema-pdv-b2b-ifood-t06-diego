const { detailProductModel } = require('../../models');

const detailProductService = async (productID) => {
  const detailProduct = await detailProductModel(productID);

  if (!detailProduct) {
    throw {
      statusCode: 404,
      message: 'Product not found.',
    };
  }
  return detailProduct;
};

module.exports = detailProductService;
