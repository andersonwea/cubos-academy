//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

function schollInscribe(idadeDoAluno, possuiResponsavel) {
  if (idadeDoAluno > 18 || idadeDoAluno < 18 && possuiResponsavel) {
    return 'Rematrícula realizada com sucesso'
  } else { 
    return 'Não é possível fazer a rematrícula'
  }
}

console.log(schollInscribe(idadeDoAluno, possuiResponsavel))