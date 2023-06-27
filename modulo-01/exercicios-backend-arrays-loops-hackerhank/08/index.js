function solucao(notas) {
	let minGrade = notas[0]
  let maxGrade = notas[0]
  let total = 0
  
  for(let grade of notas) {
    total += grade
    
    if(grade > maxGrade) {
      maxGrade = grade
    }
    
    if(grade < minGrade) {
      minGrade = grade
    }
  }

  console.log(total, minGrade, maxGrade)
  
  const gradeMedia = (total - minGrade - maxGrade ) / (notas.length - 2)
   
  console.log(gradeMedia)
}

solucao([100, 100, 100, 20, 50, 30, 14, 100, 100, 100])