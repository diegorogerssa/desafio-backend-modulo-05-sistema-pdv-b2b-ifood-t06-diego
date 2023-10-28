const registerModel = require('./user/registerModel');
const getUserByEmailModel = require('./user/getUserByEmailModel');
const updateUserModel = require('./user/updateUserModel');
const getUserByIdModel = require('./user/getUserByIdModel');

const listCategoryModel = require('./category/listCategoryModel');
const getCategoryByIDModel = require('./category/getCategoryByIDModel');

const registerProductModel = require('./product/registerProductModel');
const updateProductModel = require('./product/updateProductModel');
const getProductByIDModel = require('./product/getProductByIDModel');
const listProductModel = require('./product/listProductModel');
const listProductByCategoryModel = require('./product/listProductByCategoryModel');

module.exports = {
  registerModel,
  getUserByEmailModel,
  updateUserModel,
  getUserByIdModel,

  listCategoryModel,
  getCategoryByIDModel,

  registerProductModel,
  updateProductModel,
  getProductByIDModel,
  listProductModel,
  listProductByCategoryModel
};
