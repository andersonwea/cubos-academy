import express from 'express'

const app = express()

let count = 0

app.get('/', (req, res) => {
  const users = ['José', 'Maria', 'João', 'Marcos', 'Fernanda']

  if (count === users.length) {
    count = 0
  }

  const currentUser = users[count]

  res.send(`É a vez de ${currentUser} jogar!`)

  count++
})

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
