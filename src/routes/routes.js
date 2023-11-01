const express = require('express');
const user = require('./userRoutes');
const category = require('./categoryRoutes');
const login = require('./loginRoutes');
const client = require('./clientRoutes');
const product = require('./productRoutes');
const { errorMiddleware } = require('../middlewares');

const routes = express.Router();

routes.use(user);
routes.use(client);
routes.use(category);
routes.use(login);
routes.use(product);
routes.use(errorMiddleware);

module.exports = routes;
