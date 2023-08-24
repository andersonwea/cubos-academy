import { z } from 'zod'
import { env } from '../env/index.js'
import bcrypt from 'bcrypt'
import { pool } from '../database.js'
import { isValidEmail } from '../lib/is-valid-email.js'
import jwt from 'jsonwebtoken'

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

export async function loginUser(request, response) {
  const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string(),
  })

  const loginUser = loginUserSchema.safeParse(request.body)

  if (loginUser.success === false) {
    const message = loginUser.error.format()

    return response.status(400).json({ message })
  }

  const { email, password } = loginUser.data

  const query = `
    SELECT * 
    FROM users 
    WHERE email = $1
    LIMIT 1
  `
  try {
    const user = await pool.query(query, [email])

    if (user.rows.length < 1) {
      return response
        .status(404)
        .json({ message: 'Email or password invalid.' })
    }

    const isAuthenticated = await bcrypt.compare(
      password,
      user.rows[0].password,
    )

    if (!isAuthenticated) {
      return response
        .status(401)
        .json({ message: 'Email or password invalid.' })
    }

    const token = jwt.sign(
      {
        id: user.rows[0].id,
      },
      env.JWT_SECRET,
      {
        expiresIn: '7d',
      },
    )

    return response.json({ login: 'success', token })
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}
