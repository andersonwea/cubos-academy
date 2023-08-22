import pg from 'pg'
import { env } from './env/index.js'

const { Pool } = pg

export const pool = new Pool({
  host: env.PGHOST,
  port: env.PGPORT,
  database: env.PGDATABASE,
  user: env.PGUSER,
  password: env.PGPASSWORD,
})
