const words = ['livro', 'caneta', 'sol', 'carro', 'orelha']

function wordLimitCheck(words) {
  const isAllValidWords = words.every((word) => word.length < 5)

  if (!isAllValidWords) {
    return 'Existe palavra inválida'
  }

  return 'Todas palavras são válidas'
}

console.log(wordLimitCheck(words))
