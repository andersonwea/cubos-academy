const caractere = "E";

function indentifyCaractere(caractere) {
  const regexs = [
    {message: 'Vogal maiúscula', regex: /[AEIOU]/},
    {message: 'Vogal minuscula', regex: /[aeiou]/},
    {message: 'Consoante maiúscula', regex: /[A-Z]/},
    {message: 'Consoante minúsculo', regex: /[a-z]/},
    {message: 'É um número', regex: /\d/},
  ]

  for(let testRegex of regexs) {
    const { message, regex } = testRegex
    if(regex.test(caractere)) {
      return message
    }
  }
}

console.log(indentifyCaractere(caractere))
