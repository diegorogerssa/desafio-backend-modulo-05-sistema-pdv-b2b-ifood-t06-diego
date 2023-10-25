require('dotenv').config();

const localConfig = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_LOCAL_HOST,
    user: process.env.POSTGRES_LOCAL_USER,
    password: process.env.POSTGRES_LOCAL_PASS,
    port: process.env.POSTGRES_LOCAL_PORT,
    database: process.env.POSTGRES_LOCAL_DB,
  },
});

const elephantConfig = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
  },
});

const knex = process.env.NODE_ENV === 'production' ? elephantConfig : localConfig;

module.exports = knex;
