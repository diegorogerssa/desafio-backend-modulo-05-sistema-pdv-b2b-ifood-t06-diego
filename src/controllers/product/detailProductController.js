const { detailProductService } = require('../../services');

const detailProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await detailProductService(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = detailProductController;
