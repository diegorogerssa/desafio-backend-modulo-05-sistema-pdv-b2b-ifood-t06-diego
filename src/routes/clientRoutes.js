const express = require('express');
const { authenticationToken } = require('../middlewares/authenticationToken');
const listClientsController = require('../controllers/client/listClientController');

const client = express.Router();

client.get('/cliente', authenticationToken, listClientsController);

module.exports = client;
