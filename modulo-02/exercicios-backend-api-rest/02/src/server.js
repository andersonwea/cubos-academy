import express from 'express'
import { guestsRouter } from './routes/guests.js'

const app = express()

app.use(express.json())

app.use(guestsRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
