import { z } from 'zod'
import bcrypt from 'bcrypt'
import { pool } from '../database.js'
import { isValidEmail } from '../lib/is-valid-email.js'

export async function createUser(request, response) {
  const createUserSchemma = z.object({
    name: z.string(),
    password: z.string(),
    email: z
      .string()
      .email()
      .refine(async (email) => {
        return await isValidEmail(email)
      }, 'E-mail already registered'),
  })

  const result = await createUserSchemma.safeParseAsync(request.body)

  if (result.success === false) {
    const message = result.error.format()

    return response.status(400).json({ message })
  }

  const { name, email, password } = result.data

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const query = `
      INSERT INTO users
      (name, email, password)
      VALUES
      ($1, $2, $3)
      RETURNING name, email
    `

    const newUser = await pool.query(query, [name, email, hashedPassword])

    return response.status(201).json(newUser.rows[0])
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}
