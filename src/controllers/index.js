const registerController = require('./user/registerController');
const listCategoryController = require('./category/listCategoryController');
const loginController = require('./user/loginController');
const updateUserController = require('./user/updateUserController');
const detailUserController = require('./user/detailUserController');
const createClientController = require('./clients/createClientController');
const updateClientController = require('./clients/updateClientController');

module.exports = {
  registerController,
  loginController,
  updateUserController,
  listCategoryController,
  detailUserController,
  createClientController,
  updateClientController,
};
