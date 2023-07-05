const primeiroNome = 'Mario'
const sobrenome = ''
const apelido = 'grandão'

function displayName(primeiroNome, sobrenome, apelido) {
  if (!primeiroNome) {
    return 'Nome é um campo obrigatório'
  }

  if (apelido) {
    return apelido
  } else if (sobrenome) {
    return primeiroNome + ' ' + sobrenome
  } else {
    return primeiroNome
  }
}

console.log(displayName(primeiroNome, sobrenome, apelido))
