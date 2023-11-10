const registerUserService = require('./user/registerUserService');
const loginService = require('./user/loginService');
const updateUserService = require('./user/updateUserService');
const createClientService = require('./clients/createClientService');
const updateClientService = require('./clients/updateClientService');
const registerProductService = require('./product/registerProductService');
const updateProductService = require('./product/updateProductService');
const listProductService = require('./product/listProductService');
const deleteProductService = require('./product/deleteProductService');
const detailProductService = require('./product/detailProductService');
const detailClientService = require('./clients/detailClientService');
const registerOrderService = require('./order/registerOrderService');
const listOrderService = require('./order/listOrderService');

module.exports = {
  registerUserService,
  loginService,
  updateUserService,
  createClientService,
  updateClientService,
  registerProductService,
  updateProductService,
  listProductService,
  deleteProductService,
  detailProductService,
  detailClientService,
  registerOrderService,
  listOrderService,
};
