const express = require('express');
const { registerController } = require('../controllers');
const { validateUserData } = require('../middlewares');
const { schemaRegisterUser } = require('../middlewares/schemas');

const user = express.Router();

user.post('/usuario', validateUserData(schemaRegisterUser), registerController);

module.exports = user;
