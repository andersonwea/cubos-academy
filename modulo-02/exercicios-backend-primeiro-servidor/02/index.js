import express from 'express'

const app = express()

let timePassedInSeconds = 0

let timer

app.get('/iniciar', (req, res) => {
  timer = setInterval(() => {
    timePassedInSeconds++
  }, 1000)

  res.send('Cronômetro iniciado!')
})

app.get('/pausar', (req, res) => {
  clearInterval(timer)

  res.send('Cronômetro pausado!')
})

app.get('/continuar', (req, res) => {
  timer = setInterval(() => {
    timePassedInSeconds++
  }, 1000)

  res.send('Cronômetro continuando!')
})

app.get('/zerar', (req, res) => {
  clearInterval(timer)
  timePassedInSeconds = 0

  res.send('Cronômetro zerado!')
})

app.get('/', (req, res) => {
  const minutes = Math.floor(timePassedInSeconds / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (timePassedInSeconds % 60).toString().padStart(2, '0')

  res.send(
    `Tempo atual do cronômetro: ${minutes} minutos e ${seconds} segundos`,
  )
})

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
