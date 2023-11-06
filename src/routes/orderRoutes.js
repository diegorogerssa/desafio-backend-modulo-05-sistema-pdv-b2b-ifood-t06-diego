const express = require('express');
const { registerOrderController } = require('../controllers');
const { authenticationToken, validateData } = require('../middlewares');
const { schemaRegisterOrder } = require('../middlewares/schemas');

const order = express.Router();

order.post('/pedido', authenticationToken, validateData(schemaRegisterOrder), registerOrderController);

module.exports = order;
