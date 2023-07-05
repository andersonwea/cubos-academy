function calcInterestRate(totalPaid, capital, months) {
  const interestRate = (totalPaid / capital) ** (1 / months) - 1

  return (interestRate * 100).toFixed(3)
}

const totalPaid = 90_000
const capital = 60_000
const months = 24

console.log(calcInterestRate(totalPaid, capital, months))
