const cart = {
  clientName: "Guido Bernal",
  products: [
      {
          id: 1,
          name: "Camisa",
          qty: 3,
          unitPrice: 3000
      },
      {
          id: 2,
          name: "Bermuda",
          qty: 2,
          unitPrice: 5000
      }
  ]
}

function printCartSummary(cart) {
  const { clientName, products } = cart

  const { totalItems, totalToPay } = products.reduce((checkout, product) => {
    checkout.totalItems += product.qty
    checkout.totalToPay += product.unitPrice

    return checkout
  }, {totalItems: 0, totalToPay: 0})

  const totalToPayInReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(totalToPay / 100)

  return (
    `
      Client: ${clientName}
      Total de itens: ${totalItems} itens
      Total a pagar: ${totalToPayInReal}`
  )
}  

console.log(printCartSummary(cart))