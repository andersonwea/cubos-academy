const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
function checkIncomeTax(aposentada, portadoraDeDoenca, totalDeRendimentos) {
  if(aposentada || portadoraDeDoenca) {
    return 'ISENTA'
  } else if(totalDeRendimentos > 28_559.70) {
    return 'PEGA LEÃO'
  } else {
    return 'VAZA LEÃO! JÁ TA DÍFICIL SEM VOCÊ'
  }
}

console.log(checkIncomeTax(aposentada, portadoraDeDoenca, totalDeRendimentos))