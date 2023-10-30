const { listClientsModel } = require('../../models');

const listClientsController = async (_req, res, next) => {
  try {
    const clients = await listClientsModel();
    return res.status(200).json(clients);
  } catch (error) {
    return next(error);
  }
};

module.exports = listClientsController;
