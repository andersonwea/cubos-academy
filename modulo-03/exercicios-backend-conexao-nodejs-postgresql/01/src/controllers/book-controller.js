import { z } from 'zod'
import { pool } from '../database.js'

export async function createBook(request, response) {
  const createBookParamsSchema = z.object({
    id: z.string(),
  })

  const createBookSchema = z.object({
    name: z.string(),
    gender: z.string(),
    publishing_company: z.string(),
    published_at: z.string(),
  })

  const paramsResult = createBookParamsSchema.safeParse(request.params)
  const bookResult = createBookSchema.safeParse(request.body)

  if (paramsResult.success === false) {
    const message = paramsResult.error.issues

    return response.status(400).json({ message })
  }

  if (bookResult.success === false) {
    const message = bookResult.error.issues

    return response.status(400).json({ message })
  }

  const { name, gender, publishing_company, published_at } = bookResult.data
  const { id } = paramsResult.data

  const query = `
    INSERT INTO books
    (name, gender, publishing_company, published_at, author_id)
    VALUES
    ($1, $2, $3, $4, $5) RETURNING * 
  `
  const params = [name, gender, publishing_company, published_at, id]

  try {
    const book = await pool.query(query, params)

    return response.status(201).json(book.rows[0])
  } catch (err) {
    console.error(err)
    return response.status(500).json()
  }
}

export async function listBooks(_request, response) {
  const query = `
    SELECT b.id,
      b.name,
      b.gender,
      b.publishing_company,
      b.published_at::text,
      TO_JSONB(a) AS author
    FROM books b
    INNER JOIN authors a
    ON b.author_id = a.id
    GROUP BY b.id, a.id
  `

  try {
    const books = await pool.query(query)

    return response.json(books.rows)
  } catch (err) {
    console.error(err.message)
    return response.status(500).send()
  }
}
