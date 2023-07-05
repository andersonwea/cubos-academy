function solucao(primeiraLetra, segundaLetra, palavras) {
  const firstTwoLettersToSearch = `${primeiraLetra}${segundaLetra}`
  let isWordFound = false

  for (const word of palavras) {
    const firstTwoLettersWord = word[0] + word[1]

    if (firstTwoLettersToSearch === firstTwoLettersWord) {
      console.log(word)
      isWordFound = true
    }
  }
  if (!isWordFound) {
    console.log('NENHUMA')
  }
}

solucao('a', 'v', ['aveia', 'manha', 'ave'])
