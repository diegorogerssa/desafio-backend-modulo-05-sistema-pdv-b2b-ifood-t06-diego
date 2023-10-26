const { listCategoryModel } = require('../../models');

const listCategoryController = async (_req, res, next) => {
  try {
    const categories = await listCategoryModel();
    return res.status(200).json(categories);
  } catch (error) {
    return next(error);
  }
};

module.exports = listCategoryController;
