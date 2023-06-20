const jogada1 = 5;
const jogada2 = 3;

//seu código aqui
function checkEvenOrOdd(jogada1, jogada2) {
  const total = jogada1 + jogada2

  if(total % 2 == 0) {
    return 'par'
  } else {
    return 'impar'
  }
}

console.log(checkEvenOrOdd(jogada1, jogada2))