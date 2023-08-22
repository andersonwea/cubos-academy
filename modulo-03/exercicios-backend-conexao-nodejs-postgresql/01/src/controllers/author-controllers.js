import { z } from 'zod'
import { pool } from '../database.js'

export async function createAuthor(request, response) {
  const createAuthorSchema = z.object({
    name: z.string({ required_error: 'Name is required.' }),
    age: z.number(),
  })

  const result = createAuthorSchema.safeParse(request.body)

  if (!result.success) {
    const message = result.error.issues

    return response.status(400).json({ message })
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

export async function getAuthor(request, response) {
  const getAuthorParamsSchema = z.object({
    id: z.string(),
  })

  const result = getAuthorParamsSchema.safeParse(request.params)

  if (!result.success) {
    const message = result.error.issues

    return response.status(400).json({ message })
  }

  const { id } = result.data

  const query = `
    SELECT a.*,
    JSON_AGG(
      TO_JSON(b)
    ) AS livros
    FROM authors a
    LEFT JOIN books b
    ON a.id = b.author_id
    WHERE a.id = $1
    GROUP BY a.id
  `

  try {
    const author = await pool.query(query, [id])

    if (author.rows.length === 0) {
      return response.status(404).json({ message: 'Author not found.' })
    }

    return response.json(author.rows[0])
  } catch (err) {
    console.error(err.message)
    return response.status(500).json()
  }
}
