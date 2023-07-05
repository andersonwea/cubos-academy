// quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 1

function waterConsumeControl(quantidadeDeAguaIngerida) {
  const waterControls = [
    {
      amount: 1.5,
      risk: 'ALTO',
      message: 'Você está ingerindo pouquissima água, beba mais água!',
    },
    {
      amount: 3.0,
      risk: 'MODERADO',
      message: 'Você está ingerindo pouca água, beba mais!',
    },
    {
      amount: Infinity,
      risk: 'BAIXO',
      message: 'Você está ingerindo uma boa quantidade de água, parabéns!',
    },
  ]

  for (const waterControl of waterControls) {
    const { amount, risk, message } = waterControl

    if (quantidadeDeAguaIngerida < amount) {
      return `Risco ${risk} - ${message}`
    }
  }
}

console.log(waterConsumeControl(quantidadeDeAguaIngerida))
