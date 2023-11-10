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

const multer = require('../config/multer/multer');

const product = express.Router();

product.post(
  '/produto',
  authenticationToken,
  multer.single('produto_imagem'),
  validateData(schemaRegisterProduct),
  registerProductController,
);

product.put(
  '/produto/:id',
  authenticationToken,
  multer.single('produto_imagem'),
  validateData(schemaRegisterProduct),
  updateProductController,
);
product.get('/produto', authenticationToken, listProductController);
product.get('/produto/:id', authenticationToken, detailProductController);

product.delete('/produto/:id', authenticationToken, deleteProductController);

module.exports = product;
