import express from 'express'
import { propertiesRouter } from './routes/properties.js'

const app = express()

app.use('/', propertiesRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3333')
})
