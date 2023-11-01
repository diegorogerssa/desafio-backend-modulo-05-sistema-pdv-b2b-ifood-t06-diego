const express = require('express');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaRegisterProduct } = require('../middlewares/schemas');

const {
  registerProductController,
  updateProductController,
  listProductController,
  deleteProductController,
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

product.delete('/produto/:id', authenticationToken, deleteProductController);

module.exports = product;
