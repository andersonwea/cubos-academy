import { z } from 'zod'
import { pool } from '../database.js'

export async function createPokemon(request, response) {
  const createPokemonSchema = z.object({
    name: z.string(),
    skills: z.string(),
    image: z.string(),
    nickname: z.string(),
  })

  const { user_id } = request.locals

  const _pokemon = createPokemonSchema.safeParse(request.body)

  if (_pokemon.success === false) {
    const message = _pokemon.error.format()

    return response.status(400).json({ message })
  }

  const { name, skills, image, nickname } = _pokemon.data

  const query = `
    INSERT INTO pokemons
    (user_id, name, skills, image, nickname)
    VALUES
    ($1, $2, $3, $4, $5)
    RETURNING *
  `

  try {
    const pokemon = await pool.query(query, [
      user_id,
      name,
      skills,
      image,
      nickname,
    ])

    return response.status(201).json(pokemon.rows[0])
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}
