import express from 'express'
import { studentRouter } from './routes/students.js'

const app = express()

app.use(express.json())

app.use(studentRouter)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
