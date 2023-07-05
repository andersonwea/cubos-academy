const jogada1 = 'pedra'
const jogada2 = 'tesoura'

// seu código aqui
function checkWinner(jogada1, jogada2) {
  const moves = [jogada1, jogada2]

  if (jogada1 === jogada2) {
    return 'empate'
  }

  if (moves.includes('pedra') && moves.includes('tesoura')) {
    return 'pedra'
  } else if (moves.includes('pedra') && moves.includes('papel')) {
    return 'papel'
  } else if (moves.includes('tesoura') && moves.includes('papel')) {
    return 'teoura'
  }
}

console.log(checkWinner(jogada1, jogada2))
