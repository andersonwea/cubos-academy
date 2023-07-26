import express from 'express'
import { pokemonsRouter } from './routes/pokemons.js'

const app = express()

app.use(express.json())

app.use(pokemonsRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
