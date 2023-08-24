import express from 'express'
import {
  createPokemon,
  listPokemons,
  updatePokemonNickname,
} from '../controllers/pokemon-controllers.js'
import { checkParamsId } from '../middlewares/check-params-id.js'

export const pokemonRoutes = express()

pokemonRoutes.post('/pokemons', createPokemon)
pokemonRoutes.patch('/pokemons/:id', checkParamsId, updatePokemonNickname)
pokemonRoutes.get('/pokemons', listPokemons)
