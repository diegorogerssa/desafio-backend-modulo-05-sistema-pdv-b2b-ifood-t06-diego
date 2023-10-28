const registerModel = require('./user/registerModel');
const getUserByEmailModel = require('./user/getUserByEmailModel');
const updateUserModel = require('./user/updateUserModel');
const getUserByIdModel = require('./user/getUserByIdModel');
const listCategoryModel = require('./category/listCategoryModel');
const createClientModel = require('./clients/createClientModel');
const getClientByEmailModel = require('./clients/getClientByEmailModel');
const getClientByIdModel = require('./clients/getClientByIdModel');
const updateClientModel = require('./clients/updateClientModel');
const getClientByCpfModel = require('./clients/getClientByCpfModel');

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
};
