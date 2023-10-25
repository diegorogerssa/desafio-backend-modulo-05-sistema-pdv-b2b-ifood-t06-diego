const express = require('express');
const { categoryController } = require('../controllers');

const category = express.Router();

category.get('/categoria', categoryController);

module.exports = category;
