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

export async function updatePokemonNickname(request, response) {
  const updatePokemonNicknameSchema = z.object({
    nickname: z.string(),
  })

  const _nickName = updatePokemonNicknameSchema.safeParse(request.body)

  if (_nickName.success === false) {
    const message = _nickName.error.format()

    return response.status(400).json({ message })
  }

  const { nickname } = _nickName.data
  const { id } = request.params

  const query = `
    UPDATE pokemons
    SET nickname = $1
    WHERE id = $2
  `

  try {
    await pool.query(query, [nickname, id])

    return response.json({ message: 'Pokemon nickname atualized.' })
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}

export async function listPokemons(request, response) {
  const { user_id } = request.locals

  const query = `
    SELECT p.id,
      u.name AS user,
      p.name,
      p.nickname,
      ARRAY_AGG(p.skills) AS skills,
      p.image
    FROM pokemons p
    INNER JOIN users u
    ON p.user_id = u.id
    GROUP BY u.name, p.id
  `

  try {
    const pokemons = await pool.query(query)

    return response.json(pokemons.rows)
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}

export async function listPokemonById(request, response) {
  const { id } = request.params

  const query = `
    SELECT p.id,
      u.name AS user,
      p.name,
      p.nickname,
      ARRAY_AGG(p.skills) AS skills,
      p.image
    FROM pokemons p
    INNER JOIN users u
    ON p.user_id = u.id
    WHERE p.id = $1
    GROUP BY u.name, p.id
  `

  const pokemon = await pool.query(query, [id])

  if (pokemon.rows.length === 0) {
    return response.status(404).json({ message: 'Pokemon not found.' })
  }

  return response.json(pokemon.rows[0])
}

export async function deletePokemon(request, response) {
  const { id } = request.params

  const query = `
    DELETE FROM pokemons
    WHERE id = $1
  `

  try {
    await pool.query(query, [id])

    return response.json({ message: 'Pokemon deleted.' })
  } catch (err) {
    console.error(err.message)

    return response.status(500).send()
  }
}
