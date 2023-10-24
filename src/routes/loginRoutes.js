const express = require('express');
const { loginController } = require('../controllers');
const { validateData } = require('../middlewares');
const { schemaLoginUSer } = require('../middlewares/schemas');

const login = express.Router();

login.post('/login', validateData(schemaLoginUSer), loginController);

module.exports = login;
