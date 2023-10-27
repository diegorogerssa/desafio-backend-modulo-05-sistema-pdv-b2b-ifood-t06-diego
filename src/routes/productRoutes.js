const express = require('express');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaRegisterProduct } = require('../middlewares/schemas');

const {
  registerProductController,
} = require('../controllers');

const product = express.Router();

product.post('/produto',
  authenticationToken,
  validateData(schemaRegisterProduct),
  registerProductController
);

// product.put('/produto',
//   authenticationToken,
//   validateData(schemaRegisterProduct),
//   updateController
// );
//
// product.get('/produto', authenticationToken, detailProductController);

module.exports = product;
