import 'dotenv/config'
import nodemailer from 'nodemailer'
import { env } from '../env'

export const transport = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS
  }
})