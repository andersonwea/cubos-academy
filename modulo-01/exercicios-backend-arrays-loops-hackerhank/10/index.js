function solucao(resultados) {
	let total = 0
  
  const scores = {
    "V": 3,
    "E": 1,
    "D": 0
  }
  
  for(let result of resultados) {
    total += scores[result]
  }
  
  console.log(total)
}