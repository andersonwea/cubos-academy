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
    let { totalItems, totalToPay } = this.products.reduce((checkout, product) => {
      checkout.totalItems += product.qty
      checkout.totalToPay += product.unitPrice * product.qty
      
      return checkout
    }, {totalItems: 0, totalToPay: 0})

    const discount = this.calcDiscount(totalItems, totalToPay)

    if(discount) {
      totalToPay -= discount
    }

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
    const isAlreadyInCart = this.products.find(productInCart => {
      if(productInCart.id === product.id) {
        productInCart.qty += product.qty
        return true
      }
    })

    if(!isAlreadyInCart) {
      this.products.push(product)
      return
    }
  },

  printDetails() {
    const clientName = this.clientName
    const { totalItems, totalToPay} = this.total()

    const totalToPayInReal = convertPriceInReal(totalToPay)

    const productsDetail = this.products.reduce((productsDetail, product, index) => {
      const { name, qty, unitPrice } = product
      const totalUnitPrice = unitPrice * qty
      const totalUnitPriceInReal = convertPriceInReal(totalUnitPrice)

      productsDetail.push({ detail: `Item ${index + 1} - ${name} - ${qty} und - ${totalUnitPriceInReal}` })

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
        Total a pagar:  ${totalToPayInReal}
      `
    )
  },

  calcDiscount(totalItems, totalToPay) {
    let chepestProductInCart = this.products[0].unitPrice
    let discounts = []

    for(let product of this.products) {
      if(product.unitPrice < chepestProductInCart) {
        chepestProductInCart = product.unitPrice
      }
    }
      
    if(totalItems > 4) {
      discounts.push({
        name: 'oneIsFree',       
        active: true,
        discountValue: chepestProductInCart
      })
    }

    if(totalToPay > 10000) {
      const discountValue = totalToPay * 0.1

      console.log(totalToPay)

      discounts.push({
          name: 'moreThan100',
          active: true,
          discountValue: discountValue
      })
    }

    const betterDiscountToClient = discounts.reduce((maxDiscount, discount) => {
      maxDiscount = discount.discountValue

      if(discount > maxDiscount.discountValue) {
        maxDiscount = discount
      }

      return maxDiscount
    }, 0)

    return betterDiscountToClient
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


cart.addProduct(newShorts)
cart.addProduct(newSneaker)
cart.printDetails()



