const express = require('express');
const user = require('./userRoutes');
const category = require('./categoryRoutes');
const login = require('./loginRoutes');
const migration = require("./migrationRoute")

const routes = express.Router();

routes.use(migration)
routes.use(user);
routes.use(category);
routes.use(login);


module.exports = routes;
