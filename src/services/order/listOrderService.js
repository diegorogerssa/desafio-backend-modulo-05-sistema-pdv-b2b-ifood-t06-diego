const {
  listOrderModel,
  getClientByIdModel,
} = require('../../models');

const listOrderService = async (clientId) => {
  if (clientId) {
    const clientExists = await getClientByIdModel(clientId);
    if (!clientExists) {
      throw {
        statusCode: 404,
        message: 'Client not found',
      };
    }
  }

  const orders = await listOrderModel(clientId);

  return orders;
};

module.exports = listOrderService;
