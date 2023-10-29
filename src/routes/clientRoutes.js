const express = require('express');
const { validateData, authenticationToken } = require('../middlewares');
const { schemaCreateClient, schemaUpdateClient } = require('../middlewares/schemas');
const { createClientController, updateClientController } = require('../controllers');

const client = express.Router();

client.post('/clientes', authenticationToken, validateData(schemaCreateClient), createClientController);
client.put('/clientes/:id', authenticationToken, validateData(schemaUpdateClient), updateClientController);

module.exports = client;
