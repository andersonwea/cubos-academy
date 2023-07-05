// valor do produto comprado.
const valorDoProduto = 100000

// quantidade de parcelas
const quantidadeDoParcelamento = 10

// valor pago
const valorPago = 300

function purchasePaymentStatus(
  valorDoProduto,
  quantidadeDoParcelamento,
  valorPago,
) {
  const amountPaidInCents = valorPago * 100
  const needtoPay = valorDoProduto - amountPaidInCents

  if (needtoPay <= 0) {
    return 'O produto já foi pago'
  }

  const monthyPayment = valorDoProduto / quantidadeDoParcelamento

  const monthyPaymentMissing =
    quantidadeDoParcelamento - amountPaidInCents / monthyPayment

  return `Restam ${monthyPaymentMissing} parcelas de R$ ${monthyPayment / 100}`
}

console.log(
  purchasePaymentStatus(valorDoProduto, quantidadeDoParcelamento, valorPago),
)
