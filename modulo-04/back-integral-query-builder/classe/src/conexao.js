const { knex: setupKnex } = require('knex')
require('dotenv/config')

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env

const config = {
  client: 'pg',
  connection: {
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
  },
  migrations: {
    extension: 'js',
    directory: './db/migrations',
  },
}

const knex = setupKnex(config)

module.exports = { config, knex }
