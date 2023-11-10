const path = require('path');
const {
  registerOrderModel,
  getClientByIdModel,
  getProductByIDModel,
} = require('../../models');
const compilerHtml = require('../../email/compiler/compilerHtml');
const transporter = require('../../email/config/nodeMailer');
const { centsToReal } = require('../../utils');

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

  const modifiedDataForEmail = [...products].map((item) => ({
    ...item,
    valor: centsToReal(item.valor),
  }));

  const templatePath = path.resolve(__dirname, '../../email/templates/orderProducts.html');

  const html = await compilerHtml(templatePath, {
    orderId: newOrder.pedido.id,
    totalOrder: centsToReal(newOrder.pedido.valor_total),
    orderDescription: newOrder.pedido.observacao || 'sem observação',
    orderProducts: modifiedDataForEmail,
  });

  const message = {
    from: `${process.env.EMAIL_SENDER} <${process.env.EMAIL_SENDER}>`,
    to: `${client.email}`,
    subject: 'Pedido de produto',
    html,
  };

  transporter.sendMail(message);

  return [newOrder];
};

module.exports = registerOrderService;
