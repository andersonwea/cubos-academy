const nome = 'Guido Cerqueira'

function nicknameGenerator(nome) {
  const nickname = nome.replace(' ', '').toLowerCase().slice(0, 12)

  return '@' + nickname
}

console.log(nicknameGenerator(nome))
