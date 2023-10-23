require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  },
});

module.exports = knex;
