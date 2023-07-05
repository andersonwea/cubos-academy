const letras = ['A', 'a', 'B', 'C', 'E', 'e']

function countLetters(letras) {
  let message = ''
  let count = 0

  for (word of letras) {
    if (word === 'E' || word === 'e') {
      count += 1
      message = `Foram encontradas ${count} letras "E" ou "e"`
    }
  }

  if (!count) {
    message = `Nenhuma letra "E" ou "e" foi encontrada`
  }

  return message
}

console.log(countLetters(letras))
