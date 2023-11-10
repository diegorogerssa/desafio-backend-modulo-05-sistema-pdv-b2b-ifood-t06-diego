/* eslint-disable camelcase */
const {
  listProductModel,
  listProductByCategoryModel,
  getCategoryByIDModel,
} = require('../../models');

const listProductService = async (category_id) => {
  let products;

  if (category_id) {
    const categoryExists = await getCategoryByIDModel(category_id);
    if (!categoryExists) {
      throw {
        statusCode: 404,
        message: 'Category not found',
      };
    }

    products = await listProductByCategoryModel(category_id);
  } else {
    products = await listProductModel();
  }

  const addCategoryDescription = async (products) => {
    for (const product of products) {
      const categoria_id = product.categoria_id
      const { descricao } = await getCategoryByIDModel(categoria_id)
      
      product.categoria_descricao = descricao;
    }

    products = await addCategoryDescription(products);

    return products;
  };

  return products;
};

module.exports = listProductService;
