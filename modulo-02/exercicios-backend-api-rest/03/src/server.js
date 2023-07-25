import express from 'express'
import { booksRouter } from './routes/books.js'

const app = express()

app.use(express.json())

app.use(booksRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
