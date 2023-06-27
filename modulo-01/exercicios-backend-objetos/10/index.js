// clientes
const patricia = { name: "Patricia", cart: [] }
const carlos = { name: "Carlos", cart: [] }
const renato = { name: "Renato", cart: [] }
const jose = { name: "José", cart: [] }
const roberto = { name: "Roberto", cart: [] }

// produtos
const tv = { name: "TV Samsung 4K", valeuInCents: 129900 }
const notebook = { name: "Notebook Dell", valeuInCents: 399990 }
const mouse = { name: "Mouse MX Master 3", valeuInCents: 23000 }
const teclado = { name: "Teclado Keychron K8", valeuInCents: 50000 }
const caboUsb = { name: "Cabo USB 2 Metros", valeuInCents: 1990 }
const carregador = { name: "Carregador portátil", valeuInCents: 4590 }
const webcam = { name: "Webcam C920s", valeuInCents: 80000 }
const monitor = { name: "Monitor LG 29 FHD", valeuInCents: 129900 }

jose.cart = [
  {item: tv, quantity: 1}, 
  {item: caboUsb, quantity: 2}, 
  {item: webcam, quantity: 1}
]

carlos.cart = [{item: notebook, quantity: 2}]

patricia.cart = [
   {item: teclado, quantity: 1},
   {item: caboUsb, quantity: 2}, 
   {item: carregador, quantity: 1},
   {item: mouse, quantity: 1},
   {item: monitor, quantity: 1}
  ]

renato.cart = [{item: webcam, quantity: 5}]

roberto.cart = [
  {item: webcam, quantity: 1}, 
  {item: caboUsb, quantity: 2}, 
  {item: monitor, quantity: 1}
]  