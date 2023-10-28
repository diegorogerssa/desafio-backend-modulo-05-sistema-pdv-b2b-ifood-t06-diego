const createClientService = require('../../services');

const createClientController = async (req, res, next) => {
  const clientData = req.body;
  try {
    const newClient = await createClientService(clientData);

    return res.status(201).json(newClient);
  } catch (error) {
    return next(error);
  }
};

module.exports = createClientController;
