const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

function queueControl(filaDeDentro, filaDeFora) {
  while(filaDeDentro.length < 5) {
    filaDeDentro.push(filaDeFora.shift())
  }

  return {filaDeDentro, filaDeFora}
}

console.log(queueControl(filaDeDentro, filaDeFora))