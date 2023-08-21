import { Pool } from 'pg'
import { env } from './env/index.js'

export const pool = new Pool({
  host: env.PGHOST,
  port: env.PORT,
  database: env.PGDATABASE,
  user: env.PGUSER,
  password: env.PGPASSWORD,
})
