const cardNumber = '1111222233334444';

function hiddenCardNumber(cardNumber) {
  const regex = /(\w{4})(\w{8})(\w{4})/g

  const cardNumberHidden = cardNumber.replace(regex, '$1********$3')

  return cardNumberHidden
}

console.log(hiddenCardNumber(cardNumber))