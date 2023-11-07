const express = require('express');
const { registerOrderController, listOrderController } = require('../controllers');
const { authenticationToken, validateData } = require('../middlewares');
const { schemaRegisterOrder } = require('../middlewares/schemas');

const order = express.Router();

order.post('/pedido', authenticationToken, validateData(schemaRegisterOrder), registerOrderController);
order.get('/pedido', authenticationToken, listOrderController);

module.exports = order;
