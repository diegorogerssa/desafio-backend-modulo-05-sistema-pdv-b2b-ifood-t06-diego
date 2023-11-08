const { registerProductService } = require('../../services');

const registerProductController = async (req, res, next) => {
  const productData = req.body;
  const {produto_imagem} = req.file

  try {
    const registeredData = await registerProductService(productData, produto_imagem);
    return res.status(201).json(registeredData);
  } catch (error) {
    return next(error);
  }
};

module.exports = registerProductController;
