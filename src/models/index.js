const registerModel = require('./user/registerModel');
const getUserByEmailModel = require('./user/getUserByEmailModel');
const updateUserModel = require('./user/updateUserModel');
const getUserByIdModel = require('./user/getUserByIdModel');

const listCategoryModel = require('./category/listCategoryModel');
const getCategoryByIDModel = require('./category/getCategoryByIDModel');

const registerProductModel = require('./product/registerProductModel');

const listClientsModel = require('./client/listClientsModel');

module.exports = {
  registerModel,
  getUserByEmailModel,
  updateUserModel,
  getUserByIdModel,

  listCategoryModel,
  getCategoryByIDModel,

  registerProductModel,

  listClientsModel,
};
