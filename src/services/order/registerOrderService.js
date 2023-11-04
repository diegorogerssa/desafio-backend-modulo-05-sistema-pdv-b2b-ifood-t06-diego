const {
  registerOrderModel,
  getClientByIdModel,
  getProductByIDModel,
} = require('../../models');
const compilerHtml = require('../../email/compiler/compilerHtml');
const transporter = require('../../email/config/nodeMailer');

const registerOrderService = async (order) => {
  const { clientId, observation, orderProducts } = order;
  const client = await getClientByIdModel(clientId);
  if (!client) {
    throw {
      statusCode: 404,
      message: 'Client not found.',
    };
  }

  let total = 0;
  const findProductsPromises = orderProducts.map(async (productOrder) => {
    const product = await getProductByIDModel(productOrder.produto_id);
    if (!product) {
      throw {
        statusCode: 404,
        message: `Product id ${productOrder.produto_id} does not exist`,
      };
    }

    if (product.quantidade_estoque < productOrder.quantidade_produto) {
      throw {
        statusCode: 400,
        message: 'Insufficient stock.',
      };
    }

    const modifiedProductOrder = { ...productOrder };
    modifiedProductOrder.valor = product.valor;
    modifiedProductOrder.descricao = product.descricao;

    total += product.valor * productOrder.quantidade_produto;

    return modifiedProductOrder;
  });

  const products = await Promise.all(findProductsPromises);

  const newOrder = await registerOrderModel(clientId, observation, total, products);

  const html = await compilerHtml('./src/email/templates/orderProducts.html', {
    orderId: newOrder.pedido.id,
    totalOrder: newOrder.pedido.valor_total,
    orderDescription: newOrder.pedido.observacao || 'sem observação',
    orderProducts: products,

  });
  const message = {
    from: `${process.env.EMAIL_SEND} <${process.env.EMAIL_SEND}>`,
    to: '8bit@email.com',
    subject: 'Pedido de produto',
    html,
  };

  transporter.sendMail(message);

  return [newOrder];
};

module.exports = registerOrderService;
