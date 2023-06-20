const alturaEmCm = 205;

const positions = {
  185: 'LÍBERO',
  195: 'PONTEIRO',
  205: 'OPOSTO',
  Infinity: 'CENTRAL'
}

//seu código aqui
function takePlayerPosition(alturaEmCm) {
  if(alturaEmCm < 180) {
    return '***REPROVADO***'
  }

  for(let position in positions) {
    if(alturaEmCm <= position) {
      return positions[position]
    }
  }
}

console.log(takePlayerPosition(alturaEmCm))