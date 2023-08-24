import { z } from 'zod'
import { config } from 'dotenv'

if (process.env.NODE_ENV === 'test') {
  config({
    path: '.env.test',
    override: true,
  })
} else {
  config()
}

const envSchema = z.object({
  PGHOST: z.string(),
  PGPORT: z.coerce.number(),
  PGDATABASE: z.string(),
  PGUSER: z.string(),
  PGPASSWORD: z.string(),
})

const _env = envSchema.parse(process.env)

if (_env.sucess === false) {
  console.error('Invalid environment variables.', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
