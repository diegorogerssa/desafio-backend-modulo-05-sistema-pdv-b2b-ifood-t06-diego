const { registerOrderService } = require('../../services');

const registerOrderController = async (req, res, next) => {
  const order = {
    clientId: req.body.cliente_id,
    observation: req.body.observacao,
    orderProducts: req.body.pedido_produtos,
  };
  try {
    const newOrder = await registerOrderService(order);
    return res.status(201).json(newOrder);
  } catch (error) {
    return next(error);
  }
};

module.exports = registerOrderController;
