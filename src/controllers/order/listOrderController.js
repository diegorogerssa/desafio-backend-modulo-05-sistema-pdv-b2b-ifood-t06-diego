const { listOrderService } = require('../../services');

const listOrderController = async (req, res, next) => {
  const clientId = req.query.cliente_id;

  try {
    const orders = await listOrderService(clientId);
    return res.status(200).json(orders);
  } catch (error) {
    return next(error);
  }
};

module.exports = listOrderController;
