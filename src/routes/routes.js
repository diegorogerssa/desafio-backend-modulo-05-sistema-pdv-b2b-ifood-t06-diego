const express = require('express');
const user = require('./userRoutes');
const category = require('./categoryRoutes');
const login = require('./loginRoutes');
const product = require('./productRoutes');
const client = require('./clientRoutes');
const { errorMiddleware } = require('../middlewares');

const routes = express.Router();

routes.use(user);
routes.use(category);
routes.use(login);
routes.use(product);
routes.use(client);
routes.use(errorMiddleware);

module.exports = routes;
