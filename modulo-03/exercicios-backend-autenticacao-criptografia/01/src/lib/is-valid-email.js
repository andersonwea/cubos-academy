import { pool } from '../database.js'

export async function isValidEmail(email) {
  const query = `
    SELECT ARRAY_AGG(email) emails
    FROM users
  `

  const _emails = await pool.query(query)

  const emails = _emails.rows[0].emails

  const isValidEmail = !emails.includes(email)

  return isValidEmail
}
