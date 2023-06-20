const diaDaSemana = 3;

function checkWeekDay(diaDaSemana) {
  const days = {
    0: 'Domingo',
    1: 'Segunda-Feira',
    2: 'Terça-Feira',
    3: 'Quarta-Feira',
    4: 'Quinta-Feira',
    5: 'Sexta-Feira',
    6: 'Sábado'
  }

  if(diaDaSemana > 6 || diaDaSemana < 0) {
    return 'O dia da semana informado não é válido'
  }

  for(let day in days) {
    if(Number(day) === diaDaSemana) {
      return days[day]
    }
  }
}

console.log(checkWeekDay(diaDaSemana));