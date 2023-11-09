const registerController = require('./user/registerController');
const listCategoryController = require('./category/listCategoryController');
const loginController = require('./user/loginController');
const updateUserController = require('./user/updateUserController');
const detailUserController = require('./user/detailUserController');
const createClientController = require('./clients/createClientController');
const updateClientController = require('./clients/updateClientController');
const listClientsController = require('./clients/listClientController');
const registerProductController = require('./product/registerProductController');
const updateProductController = require('./product/updateProductController');
const listProductController = require('./product/listProductController');
const deleteProductController = require('./product/deleteProductController');
const detailProductController = require('./product/detailProductController');
const detailClientController = require('./clients/detailClientController');
const registerOrderController = require('./order/registerOrderController');
const listOrderController = require('./order/listOrderController');

module.exports = {
  registerController,
  loginController,
  updateUserController,
  listCategoryController,
  detailUserController,
  registerProductController,
  listClientsController,
  createClientController,
  updateClientController,
  updateProductController,
  listProductController,
  deleteProductController,
  detailProductController,
  detailClientController,
  registerOrderController,
  listOrderController,
};
