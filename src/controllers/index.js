const registerController = require('./user/registerController');
const listCategoryController = require('./category/listCategoryController');
const loginController = require('./user/loginController');
const updateUserController = require('./user/updateUserController');
const detailUserController = require('./user/detailUserController');
const createClientController = require('./clients/createClientController');
const updateClientController = require('./clients/updateClientController');

const registerProductController = require('./product/registerProductController');
const updateProductController = require('./product/updateProductController');
const listProductController = require('./product/listProductController');
const deleteProductController = require('./product/deleteProductController');

module.exports = {
  registerController,
  loginController,
  updateUserController,
  listCategoryController,
  detailUserController,
  createClientController,
  updateClientController,
  registerProductController,
  updateProductController,
  listProductController,
  deleteProductController,
};
