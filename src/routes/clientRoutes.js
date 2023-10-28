const express = require('express');
const { validateData } = require('../middlewares');
const { schemaCreateClient } = require('../middlewares/schemas');
const { createClientController } = require('../controllers');

const client = express.Router();

client.post('/clientes', validateData(schemaCreateClient), createClientController);

module.exports = client;
