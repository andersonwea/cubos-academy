const nota = 8.9

const notes = {
  4: 'E',
  6: 'D',
  8: 'C',
  9: 'B',
  10: 'A',
}

function transformNoteToConcept(nota) {
  for (const note in notes) {
    if (nota < note) {
      return notes[note]
    }
  }
}

console.log(transformNoteToConcept(nota))
