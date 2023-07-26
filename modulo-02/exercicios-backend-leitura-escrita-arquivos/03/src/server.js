import express from 'express'
import { addressRouter } from './routes/address.js'

const app = express()

app.use(express.json())

app.use(addressRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
