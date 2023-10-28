const {
  listProductModel,
  getCategoryByIDModel
} = require('../../models');

const listProductService = async (category_id) => {
  const products = await listProductModel();

  for (const product of products) {
    const categoria_id = product.categoria_id
    const { descricao } = await getCategoryByIDModel(categoria_id);

    product.categoria_descricao = descricao;
  }

  return products;
};

module.exports = listProductService;
