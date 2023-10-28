const registerUserService = require('./user/registerUserService');
const loginService = require('./user/loginService');
const updateUserService = require('./user/updateUserService');

const registerProductService = require('./product/registerProductService');
const updateProductService = require('./product/updateProductService');
const listProductService = require('./product/listProductService');

module.exports = {
  registerUserService,
  loginService,
  updateUserService,

  registerProductService,
  updateProductService,
  listProductService
};
