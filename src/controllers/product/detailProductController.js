const { detailProductService } = require('../../services');

const detailProductController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const detailProduct = await detailProductService(id);
    return res.status(200).json(detailProduct);
  } catch (error) {
    return next(error);
  }
};

module.exports = detailProductController;
