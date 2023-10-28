const { updateProductService } = require('../../services');

const updateProductController = async (req, res, next) => {
  const productData = req.body;
  productData.id = req.params.id;

  try {
    await updateProductService(productData);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = updateProductController;
