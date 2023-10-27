const registerUserService = require('./user/registerUserService');
const loginService = require('./user/loginService');
const updateUserService = require('./user/updateUserService');

const registerProductService = require('./product/registerProductService');

module.exports = {
  registerUserService,
  loginService,
  updateUserService,

  registerProductService
};
