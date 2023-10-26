const express = require('express');
const { registerController, updateUserController } = require('../controllers');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaRegisterUser } = require('../middlewares/schemas');

const user = express.Router();

user.post('/usuario', validateData(schemaRegisterUser), registerController);
user.put('/usuario', authenticationToken, validateData(schemaRegisterUser), updateUserController);

module.exports = user;
