const createClientModel = require('../../models');

const createClientService = async (clientData) => {
  const [client] = await createClientModel(clientData);
  return client;
};

module.exports = createClientService;
