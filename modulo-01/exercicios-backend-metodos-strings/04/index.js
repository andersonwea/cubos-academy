let identificador = '123'
let nome = 'José silva costa'
let email = '      jose@email.com  '

identificador = identificador.padStart(6, '0')
nome = nome
  .split(' ')
  .map((word) => word.charAt(0).toUpperCase().concat(word.substring(1)))
  .join(' ')
email = email.trim()

console.log(identificador)
console.log(nome)
console.log(email)
