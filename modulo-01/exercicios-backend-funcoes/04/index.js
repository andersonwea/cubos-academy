function convertPriceInReal(priceInCents) {
  const priceInReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(priceInCents / 100)

  return priceInReal
}

const bankAccount = {
  name: 'Maria',
  balance: 0,
  histories: [],

  deposit(value) {
    this.balance += value
    const deposit = {
      type: 'Deposito',
      value,
    }

    const amountInReal = convertPriceInReal(value)

    this.histories.push(deposit)
    return `Deposito de ${amountInReal} realizado para o cliente: ${this.name}.`
  },

  withdraw(value) {
    if (this.balance < value) {
      return `Saldo insuficiente para o saque de: ${this.name}`
    }
    this.balance -= value

    const withdraw = {
      type: 'Saque',
      value,
    }

    const amountInReal = convertPriceInReal(value)

    this.histories.push(withdraw)
    return `Saque de ${amountInReal} realizado para o cliente: ${this.name}.`
  },

  extract() {
    return `\nExtrato de ${this.name} - Saldo: ${convertPriceInReal(
      this.balance,
    )}\nHistórico:
      ${this.histories.map(
        ({ type, value }) => `\n${type} de ${convertPriceInReal(value)}`,
      )}
      `
  },
}

console.log(bankAccount.deposit(10000))
console.log(bankAccount.withdraw(50000))
console.log(bankAccount.withdraw(5000))
console.log(bankAccount.extract())
