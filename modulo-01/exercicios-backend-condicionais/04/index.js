const ladoA = 3
const ladoB = 3

const doubleName = {
  0: 'Branco',
  1: 'Ás',
  2: 'Duque',
  3: 'Terno',
  4: 'Quadra',
  5: 'Quina',
  6: 'Sena',
}

// seu código aqui
function isDouble(ladoA, ladoB) {
  return ladoA === ladoB
}

function checkDoubleName(ladoA, ladoB) {
  const isDoubleResult = isDouble(ladoA, ladoB)

  if (!isDoubleResult) return 'Não é BUCHA'

  for (const double in doubleName) {
    if (ladoA === +double) {
      return doubleName[double]
    }
  }
}

console.log(checkDoubleName(ladoA, ladoB))
