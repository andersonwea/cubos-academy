function calcIMC(weight, height) {
  const imc = weight / (height ** 2)

  return imc.toFixed(1)
}

const weight = 76
const height = 1.79

console.log(calcIMC(weight, height))