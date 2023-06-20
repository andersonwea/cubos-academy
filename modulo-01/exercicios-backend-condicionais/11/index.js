//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

function calStudentFunding(rendaMensalEmCentavos, mesesDecorridos, totalJaPagoPeloAluno) {
  let monthPayment = 0

  if(rendaMensalEmCentavos < 200000) {
    return `O valor da parcela desse mês é R$ ${monthPayment} reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`
  } else if (mesesDecorridos > 60 || totalJaPagoPeloAluno > 1800000) {
    monthPayment = 0
  } else {
    monthPayment = rendaMensalEmCentavos * 0.18 
  }


  return `O valor da parcela desse mês é R$ ${monthPayment / 100} reais`
}

console.log(calStudentFunding(rendaMensalEmCentavos, mesesDecorridos, totalJaPagoPeloAluno))