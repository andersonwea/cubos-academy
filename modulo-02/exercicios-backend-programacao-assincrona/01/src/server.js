import express from 'express'
import { productsRouter } from './routes/products.js'

const app = express()

app.use(express.json())

app.use(productsRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
