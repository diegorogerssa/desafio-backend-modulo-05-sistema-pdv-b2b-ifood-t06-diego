const express = require('express');
const { registerController, updateUserController, detailUserController } = require('../controllers');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaRegisterUser } = require('../middlewares/schemas');

const user = express.Router();

user.post('/usuario', validateData(schemaRegisterUser), registerController);
user.put('/usuario', authenticationToken, validateData(schemaRegisterUser), updateUserController);
user.get('/usuario', authenticationToken, detailUserController);

module.exports = user;
