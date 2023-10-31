const express = require('express');

const { validateData, authenticationToken } = require('../middlewares');
const { schemaCreateClient, schemaUpdateClient } = require('../middlewares/schemas');
const { createClientController, updateClientController } = require('../controllers');
const { listClientsController } = require('../controllers');
const { detailClientController } = require('../controllers');

const client = express.Router();

client.post('/cliente', authenticationToken, validateData(schemaCreateClient), createClientController);
client.put('/cliente/:id', authenticationToken, validateData(schemaUpdateClient), updateClientController);
client.get('/cliente', authenticationToken, listClientsController);
client.get('/cliente/:id', authenticationToken, detailClientController);

module.exports = client;
