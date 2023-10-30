const { detailClientService } = require('../../services');

const detailClientController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const detailClient = await detailClientService(id);

    return res.status(200).json(detailClient);
  } catch (error) {
    return next(error);
  }
};

module.exports = detailClientController;
