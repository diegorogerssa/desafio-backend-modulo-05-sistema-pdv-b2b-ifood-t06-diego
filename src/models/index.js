const registerModel = require('./user/registerModel');
const getUserByEmailModel = require('./user/getUserByEmailModel');
const updateUserModel = require('./user/updateUserModel');
const getUserByIdModel = require('./user/getUserByIdModel');
const listCategoryModel = require('./category/listCategoryModel');
const createClientModel = require('./clients/createClientModel');

module.exports = {
  registerModel,
  getUserByEmailModel,
  updateUserModel,
  getUserByIdModel,
  listCategoryModel,
  createClientModel,
};
