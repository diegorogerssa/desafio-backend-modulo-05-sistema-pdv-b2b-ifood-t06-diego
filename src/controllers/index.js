const registerController = require('./user/registerController');
const listCategoryController = require('./category/listCategoryController');
const loginController = require('./user/loginController');
const updateUserController = require('./user/updateUserController');
const detailUserController = require('./user/detailUserController');

const registerProductController = require('./product/registerProductController');
const updateProductController = require('./product/updateProductController');
const listProductController = require('./product/listProductController');
const detailProductController = require('./product/detailProductController');

module.exports = {
  registerController,
  loginController,
  updateUserController,
  listCategoryController,
  detailUserController,

  registerProductController,
  updateProductController,
  listProductController,
  detailProductController,
};
