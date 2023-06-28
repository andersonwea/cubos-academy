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
  ],
  total() {
    const { totalItems, totalToPay } = this.products.reduce((checkout, product) => {
      checkout.totalItems += product.qty
      checkout.totalToPay += product.unitPrice * product.qty
  
      return checkout
    }, {totalItems: 0, totalToPay: 0})

    return {totalItems, totalToPay}
  },

  printSummary() {
    const clientName = this.clientName
  
    const { totalItems, totalToPay } = this.total()
  
    const totalToPayInReal = convertPriceInReal(totalToPay)
  
    return (
      `
        Client: ${clientName}
        Total de itens: ${totalItems} itens
        Total a pagar: ${totalToPayInReal}`
    )
  },

  addProduct(product) {
    this.products.push(...product)
  },

  printDetails() {
    const clientName = this.clientName
    const { totalItems, totalToPay} = this.total()

    const totalToPayInReal = convertPriceInReal(totalToPay)

    const productsDetail = this.products.reduce((productsDetail, product, index) => {
      const { name, qty, unitPrice } = product
      const unitPriceInReal = convertPriceInReal(unitPrice)

      productsDetail.push({ detail: `Item ${index + 1} - ${name} - ${qty} und - ${unitPriceInReal}` })

      return productsDetail
    }, [])

    console.log(
      `
        Cliente: ${clientName}
        ${productsDetail.map(({detail}) => {
          return (
            `
            ${detail}`
          )
        })}

        Total de itens: ${totalItems} itens
        Total a pagar: ${totalToPayInReal}
      `
    )
  }
}

function convertPriceInReal(priceInCents) {
  const priceInReal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(priceInCents / 100)

  return priceInReal
}


const newShorts = {
  id: 2,
  name: "Bermuda",
  qty: 3,
  unitPrice: 5000
}

const newSneaker = {
  id: 3,
  name: "Tenis",
  qty: 1,
  unitPrice: 10000
}


cart.addProduct([newShorts, newSneaker])
cart.printDetails()



