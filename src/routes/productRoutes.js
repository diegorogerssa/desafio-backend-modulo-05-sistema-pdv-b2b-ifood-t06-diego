const express = require('express');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaRegisterProduct } = require('../middlewares/schemas');

const {
  registerProductController,
  updateProductController,
  listProductController,
  detailProductController,
} = require('../controllers');

const product = express.Router();

product.post(
  '/produto',
  authenticationToken,
  validateData(schemaRegisterProduct),
  registerProductController,
);
product.put(
  '/produto/:id',
  authenticationToken,
  validateData(schemaRegisterProduct),
  updateProductController,
);
product.get('/produto', authenticationToken, listProductController);
product.get('/produto/:id', authenticationToken, detailProductController);

module.exports = product;
