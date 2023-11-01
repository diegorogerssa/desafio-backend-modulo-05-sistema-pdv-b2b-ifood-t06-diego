const { deleteProductService } = require('../../services');

const deleteProductController = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteProductService(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

module.exports = deleteProductController;
