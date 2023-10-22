const express = require('express');
const { registerController } = require('../controllers');
const { validateData } = require('../middlewares');
const { schemaRegisterUser } = require('../middlewares/schemas');

const user = express.Router();

user.post('/usuario', validateData(schemaRegisterUser), registerController);

module.exports = user;
