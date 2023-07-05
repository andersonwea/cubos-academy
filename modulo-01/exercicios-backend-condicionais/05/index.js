const alturaEmCm = 185

// seu código aqui
function checkHeight(alturaEmCm) {
  if (alturaEmCm >= 180) {
    return '**APROVADO**'
  } else {
    return '**REPROVADO**'
  }
}

console.log(checkHeight(alturaEmCm))
