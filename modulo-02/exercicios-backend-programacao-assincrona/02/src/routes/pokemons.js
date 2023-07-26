import express from 'express'
import { listPokemonDetails, listPokemons } from '../controllers/pokemons.js'

export const pokemonsRouter = express.Router()

pokemonsRouter.get('/pokemon', listPokemons)

pokemonsRouter.get('/pokemon/:search', listPokemonDetails)
