const nomes = ['Ana', 'Joana', 'Carlos', 'amanda']

function filterNameWithLetterA(nomes) {
  const namesWithLetterA = []

  for (name of nomes) {
    if (name.charAt(0) === 'A' || name.charAt(0) === 'a') {
      namesWithLetterA.push(name)
    }
  }

  return namesWithLetterA
}

console.log(filterNameWithLetterA(nomes))
