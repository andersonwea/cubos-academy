const names = [
  'Maria',
  'João',
  'José',
  'Antonio',
  'Beatriz',
  'Camila',
  'amanda',
]

function getWordByInitialLetter(names) {
  const words = names.filter((name) => name.toLowerCase().charAt(0) === 'a')

  return words
}

console.log(getWordByInitialLetter(names))
