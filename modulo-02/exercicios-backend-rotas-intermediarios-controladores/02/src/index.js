import express from 'express'

const app = express()

let count = 0
let users = ['José', 'Maria', 'João', 'Marcos', 'Fernanda']

app.get('/', (req, res) => {
  if (count === users.length) {
    count = 0
  }

  const currentUser = users[count]

  res.send(`É a vez de ${currentUser} jogar!`)

  count++
})

app.get('/remover', (req, res) => {
  const index = req.query.index

  if (index > users.length - 1) {
    return res.send(
      `Não existe jogador no índice informado (${index}) para ser removido.`,
    )
  }

  users = users.filter((user, i) => i !== Number(index))
  return res.send(users)
})

app.get('/adicionar', (req, res) => {
  const { name, index } = req.query

  if (!name) {
    return res.send('Erro. Nome do jogador obrigatório!')
  }

  if (index > users.length - 1) {
    return res.send(
      `O índice informado (${index}) não existe no array. Novo jogador não adicionado.`,
    )
  }

  if (!index) {
    users.push(name)
    return res.send(users)
  }

  users.splice(index, 0, name)

  return res.send(users)
})

app.listen(3000, () => {
  console.log('🚀 HTTP server running on port http://localhost:3000')
})
