import express from 'express'
import { createPokemon } from '../controllers/pokemon-controllers.js'

export const pokemonRoutes = express()

pokemonRoutes.post('/pokemons', createPokemon)
