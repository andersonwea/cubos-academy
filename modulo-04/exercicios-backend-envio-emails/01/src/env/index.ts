import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('development'),
  DATABASE_URL: z.string(),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.coerce.number(),
  SMTP_USER: z.string(),
  SMTP_PASS: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('⚠️ Invalid environment variables.', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
