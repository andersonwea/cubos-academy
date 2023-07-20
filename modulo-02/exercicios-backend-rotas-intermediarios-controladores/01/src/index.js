import express from 'express'
import { sumNumbers } from './controllers/sumNumbers.js'
import { subtractNumbers } from './controllers/subtractNumbers.js'
import { divideNumbers } from './controllers/divideNumbers.js'
import { multiplyNumbers } from './controllers/multiplyNumberss.js'

const app = express()

app.get('/somar', sumNumbers)
app.get('/subtrair', subtractNumbers)
app.get('/dividir', divideNumbers)
app.get('/multiplicar', multiplyNumbers)

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
