const { deleteProductModel, getProductByIDModel } = require('../../models');

const deleteProductService = async (productId) => {
  const product = await getProductByIDModel(productId);
  if (!product) {
    throw {
      statusCode: 404,
      message: 'Product not found.',
    };
  }

  await deleteProductModel(productId);
};

module.exports = deleteProductService;
