
const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

function onderQueue(filaDePedidos) {
  filaDePedidos.push('pedido 15')

  filaDePedidos.shift()

  return filaDePedidos
}

console.log(onderQueue(filaDePedidos))