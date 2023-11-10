const { registerProductService } = require('../../services');

const registerProductController = async (req, res, next) => {
  const productData = req.body;
  const productImage = req.file;

  try {
    const registeredData = await registerProductService(productData, productImage);
    return res.status(201).json(registeredData);
  } catch (error) {
    return next(error);
  }
};

module.exports = registerProductController;
