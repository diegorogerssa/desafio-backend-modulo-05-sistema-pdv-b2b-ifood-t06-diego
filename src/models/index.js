const registerModel = require('./user/registerModel');
const getUserByEmailModel = require('./user/getUserByEmailModel');
const updateUserModel = require('./user/updateUserModel');
const getUserByIdModel = require('./user/getUserByIdModel');
const listCategoryModel = require('./category/listCategoryModel');
const getCategoryByIDModel = require('./category/getCategoryByIDModel');
const createClientModel = require('./clients/createClientModel');
const getClientByEmailModel = require('./clients/getClientByEmailModel');
const getClientByIdModel = require('./clients/getClientByIdModel');
const updateClientModel = require('./clients/updateClientModel');
const getClientByCpfModel = require('./clients/getClientByCpfModel');
const registerProductModel = require('./product/registerProductModel');
const updateProductModel = require('./product/updateProductModel');
const getProductByIDModel = require('./product/getProductByIDModel');
const listProductModel = require('./product/listProductModel');
const listProductByCategoryModel = require('./product/listProductByCategoryModel');
const deleteProductModel = require('./product/deleteProductModel');
const detailProductModel = require('./product/detailProductModel');
const listClientsModel = require('./clients/listClientsModel');
const registerOrderModel = require('./order/registerOrderModel');
const listOrderModel = require('./order/listOrderModel');
const productLinkedModel = require('./product/productLinkedModel');

module.exports = {
  registerModel,
  getUserByEmailModel,
  updateUserModel,
  getUserByIdModel,
  listCategoryModel,
  createClientModel,
  getClientByEmailModel,
  getClientByIdModel,
  updateClientModel,
  getClientByCpfModel,
  getCategoryByIDModel,
  registerProductModel,
  updateProductModel,
  getProductByIDModel,
  listProductModel,
  listProductByCategoryModel,
  deleteProductModel,
  detailProductModel,
  listClientsModel,
  registerOrderModel,
  listOrderModel,
  productLinkedModel,
};
