const express = require('express');

const { validateData, authenticationToken } = require('../middlewares');
const { schemaCreateClient, schemaUpdateClient } = require('../middlewares/schemas');
const { createClientController, updateClientController } = require('../controllers');
const { listClientsController } = require('../controllers');
const { detailClientsController } = require('../controllers');

const client = express.Router();

client.post('/clientes', authenticationToken, validateData(schemaCreateClient), createClientController);
client.put('/clientes/:id', authenticationToken, validateData(schemaUpdateClient), updateClientController);
client.get('/cliente', authenticationToken, listClientsController);
client.get('/cliente/:id', authenticationToken, detailClientsController);

module.exports = client;
