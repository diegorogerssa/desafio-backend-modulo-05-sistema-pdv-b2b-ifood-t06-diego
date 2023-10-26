const express = require('express');
const { listCategoryController } = require('../controllers');

const category = express.Router();

category.get('/categoria', listCategoryController);

module.exports = category;
