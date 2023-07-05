const books = [
  'Guerra e Paz',
  'A Montanha Mágica',
  'Cem Anos de Solidão',
  'Dom Quixote',
  'A Divina Comédia',
]
const bookName = 'Dom Quixote'

function getBookPosition(books, bookName) {
  const bookPosition = books.findIndex((book) => book === bookName)

  return `O livro está na posição ${bookPosition + 1}`
}

console.log(getBookPosition(books, bookName))
