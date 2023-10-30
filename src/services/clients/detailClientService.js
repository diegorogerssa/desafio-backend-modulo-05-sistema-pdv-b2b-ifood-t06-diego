const { getClientByIdModel } = require('../../models');

const detailClientService = async (clientId) => {
  const clientExists = await getClientByIdModel(clientId);

  if (!clientExists) {
    throw {
      statusCode: 404,
      message: 'Client not found.',
    };
  }

  return clientExists;
};

module.exports = detailClientService;
