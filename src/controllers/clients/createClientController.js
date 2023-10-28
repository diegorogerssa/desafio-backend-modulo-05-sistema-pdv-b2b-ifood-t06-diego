const { createClientService } = require('../../services');

const createClientController = async (req, res, next) => {
  const clientData = req.body;
  try {
    const client = await createClientService(clientData);

    return res.status(201).json(client);
  } catch (error) {
    return next(error);
  }
};

module.exports = createClientController;
