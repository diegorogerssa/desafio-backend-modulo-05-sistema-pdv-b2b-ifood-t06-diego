const { getUserByIdModel } = require('../../models');

const detailClientService = async (id) => {
  const clientExists = await getUserByIdModel(id);

  if (!clientExists) {
    throw {
      statusCode: 404,
      message: 'Client not found.',
    };
  }

  return clientExists;
};

module.exports = detailClientService;
