const { deleteProductModel, getProductByIDModel, productLinkedModel } = require('../../models');

const deleteProductService = async (productId) => {
  const product = await getProductByIDModel(productId);
  if (!product) {
    throw {
      statusCode: 404,
      message: 'Product not found.',
    };
  }

  const productBeingUsed = await productLinkedModel(productId);
  if (productBeingUsed) {
    throw {
      statusCode: 400,
      message: 'Products linked to active orders cannot be deleted.',
    };
  }

  await deleteProductModel(productId);
};

module.exports = deleteProductService;
