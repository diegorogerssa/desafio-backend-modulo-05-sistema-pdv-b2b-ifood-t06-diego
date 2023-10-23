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

const renderConfig = {
  client: 'pg',
  connection: process.env.DATABASE_URL_RENDER, 
  ssl: { rejectUnauthorized: false }, 
};

const config = process.env.NODE_ENV === 'production' ? renderConfig : localConfig;

const knex = config


module.exports = knex;
