import { z } from 'zod'
import { pool } from '../database.js'

export async function createAuthor(request, response) {
  const createAuthorSchema = z.object({
    name: z.string(),
    age: z.number(),
  })

  const result = createAuthorSchema.safeParse(request.body)

  if (!result.success) {
    return response.status(400).json(result.error.flatten())
  }

  const { name, age } = result.data

  const query = `
    INSERT INTO authors
    (name, age)
    VALUES
    ($1, $2)
    RETURNING *
  `

  try {
    const { rows } = await pool.query(query, [name, age])

    return response.status(201).json(rows[0])
  } catch (err) {
    console.error(err.message)
    return response.status(500)
  }
}
