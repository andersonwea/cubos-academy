/* eslint-disable camelcase */
import { listarPokemons, detalharPokemon } from 'utils-playground'

export async function listPokemons(request, response) {
  const { page } = request.query ?? 1
  const { results } = await listarPokemons(page)

  return response.json(results)
}

export async function listPokemonDetails(request, response) {
  const { search } = request.params

  try {
    const {
      id,
      name,
      height,
      weight,
      base_experiense,
      forms,
      abilities,
      species,
    } = await detalharPokemon(search)

    const pokemonDetails = {
      id,
      name,
      height,
      weight,
      base_experiense,
      forms,
      abilities,
      species,
    }

    return response.json(pokemonDetails)
  } catch (err) {
    console.log(err)
    return response.status(404).json({ message: 'Pokemon não encontrado.' })
  }
}
