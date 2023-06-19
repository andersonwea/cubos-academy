function calcDiscount(productFinalValue, productWithoutDiscount) {
  const discountValue = productWithoutDiscount - productFinalValue

  const percentageDiscount = discountValue / productWithoutDiscount

  return (percentageDiscount * 100).toFixed(2) 
}

const cash = 80
const sneakers = 129.99

console.log(calcDiscount(cash, sneakers))