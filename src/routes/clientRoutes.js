const express = require('express');
const { validateData } = require('../middlewares');
const { schemaCreateClient } = require('../middlewares/schemas');
const { createClientController, updateClientController } = require('../controllers');

const client = express.Router();

client.post('/clientes', validateData(schemaCreateClient), createClientController);
client.put('/clientes/:id', updateClientController);

module.exports = client;
