const { registerProductModel, getCategoryByIDModel} = require('../../models');

const registerProductService = async (productData) => {
  const { categoria_id } = productData;

  const categoryExists = await getCategoryByIDModel(categoria_id);

  if (!categoryExists) {
    throw {
      statusCode: 404,
      message: 'Category not found',
    };
  }

  const [registeredData] = await registerProductModel(productData);

  return registeredData;
};

module.exports = registerProductService;
