const { listCategoryModel } = require('../../models');

const listCategoryController = async (req, res) => {
  try {
    const categories = await listCategoryModel();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = listCategoryController;
