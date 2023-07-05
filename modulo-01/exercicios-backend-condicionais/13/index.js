// tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = 'credito'

// valor da mercadoria (centavos)
const valorDoProduto = 13000

function takeDiscount(tipoDePagamento, valorDoProduto) {
  let totalToPay = 0

  const discounts = {
    cheque: 0.03,
    credito: 0.05,
    dinheiro: 0.1,
    debito: 0.1,
  }

  for (const paymentMethod in discounts) {
    if (tipoDePagamento === paymentMethod) {
      totalToPay = valorDoProduto - valorDoProduto * discounts[paymentMethod]
    }
  }

  return totalToPay / 100
}

console.log(takeDiscount(tipoDePagamento, valorDoProduto))
