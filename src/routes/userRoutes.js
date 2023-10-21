const express = require('express');
const { registerController } = require('../controllers');
const validateUserData = require('../middlewares/validateUserData');
const schemaRegisterUser = require('../middlewares/schemas/schemaRegisterUser');

const user = express.Router();

user.post('/usuario', validateUserData(schemaRegisterUser), registerController);

module.exports = user;
