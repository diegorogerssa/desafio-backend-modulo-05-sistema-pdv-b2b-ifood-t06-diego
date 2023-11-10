/* eslint-disable camelcase */
const { listProductService } = require('../../services');

const listProductController = async (req, res, next) => {
  const category_id = req.query.categoria_id;

  try {
    const products = await listProductService(category_id);
    return res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

module.exports = listProductController;
