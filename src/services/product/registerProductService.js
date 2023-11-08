const { registerProductModel, getCategoryByIDModel} = require('../../models');
const aws = require('../../aws')
const dotenv = require('dotenv')

dotenv.config()

const registerProductService = async (productData, produto_imagem) => {
  const { categoria_id } = productData;

  const categoryExists = await getCategoryByIDModel(categoria_id);

  if (!categoryExists) {
    throw {
      statusCode: 404,
      message: 'Category not found',
    };
  }

  const [registeredData] = await registerProductModel(productData, produto_imagem);

  return registeredData;
};

module.exports = registerProductService;
