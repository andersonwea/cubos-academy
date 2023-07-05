function solucao(palpite, palavra) {
  let rightGuess = 0

  for (const letter of palavra) {
    if (letter === palpite) {
      rightGuess += 1
    }
  }

  console.log(rightGuess)
}
