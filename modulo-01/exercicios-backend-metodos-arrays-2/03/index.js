const words = ['arroz', 'feijão', 'carne', 'cerveja', 'macarrão']

function checkList(words) {
  const isValidList = !words.some(
    (word) => (word === 'cerveja') | (word === 'vodca'),
  )

  if (!isValidList) {
    return 'Revise sua lista, joão. Possui bebida com venda proibida!'
  }

  return 'Tudo certo, vamos as compras!'
}

console.log(checkList(words))
