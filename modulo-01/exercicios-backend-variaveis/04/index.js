function calcCompoundInterest(capital, interestRate, time) {
  const totalCapital = capital * (1 + interestRate) ** time

  return totalCapital.toFixed(2)
}

const capital = 1000
const interestRate = 0.125
const time = 5

console.log(calcCompoundInterest(capital, interestRate, time))