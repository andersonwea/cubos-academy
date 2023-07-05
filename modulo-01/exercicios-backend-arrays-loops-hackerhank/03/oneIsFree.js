function solucao(precos) {
  let total = 0
  let min = precos[0]

  for (const preco of precos) {
    if (preco < min) {
      min = preco
    }

    total += preco
  }

  if (precos.length >= 5) {
    total = total - min
  }

  console.log(total)
}
