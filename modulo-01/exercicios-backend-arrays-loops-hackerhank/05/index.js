function solucao(precos) {
  let difference = 0
  let minDifference = 0

  for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      if (precos[i] > precos[j]) {
        difference = precos[i] - precos[j]

        if (!minDifference || difference < minDifference) {
          minDifference = difference
        }
      }
    }
  }

  console.log(minDifference)
}

solucao([30, 10, 54, 76, 1, 4, 35])
