import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  PGHOST: z.string(),
  PGUSER: z.string(),
  PGPASSWORD: z.string(),
  PGDATABASE: z.string(),
  PGPORT: z.coerce.number(),
})

const _env = envSchema.parse(process.env)

if (_env.sucess === false) {
  console.error('⚠️Invalid environment variables.', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env
