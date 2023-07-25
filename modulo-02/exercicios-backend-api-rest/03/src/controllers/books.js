import booksData from '../database/books.js'

const { books } = booksData

export function listBooks(resquest, response) {
  return response.json(books)
}

export function listBooksById(request, response) {
  const { id } = request.params

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response
      .status(404)
      .json({ message: 'Não existe livro para o ID informado.' })
  }

  return response.json(book)
}

export function createBook(request, response) {
  const lastIndex = books.length - 1
  let identificator = books[lastIndex].id

  const { titulo, autor, ano, numPaginas } = request.body

  const newBook = {
    id: identificator++,
    titulo,
    autor,
    ano,
    numPaginas,
  }

  books.push(newBook)

  return response.status(201).json(newBook)
}

export function updateBook(request, response) {
  const { id } = request.params
  const { titulo, autor, ano, numPaginas } = request.body

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response.status(404).json({
      message: 'Não existe livro a ser substituído para o ID informado.',
    })
  }

  book.titulo = titulo
  book.autor = autor
  book.ano = ano
  book.numPaginas = numPaginas

  return response.json({ message: 'Livro substituido.' })
}

export function updateTitleBook(request, response) {
  const { id } = request.params
  const { title } = request.body

  if (!title) {
    return response.status(400).json({ message: 'Titulo obrigatório' })
  }

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response
      .status(404)
      .json({ message: 'Não existe livro a ser alterado para o ID informado' })
  }

  book.titulo = title

  return response.json({ message: 'Livro alterado.' })
}

export function updateYearBook(request, response) {
  const { id } = request.params
  const { year } = request.body

  if (!year) {
    return response.status(400).json({ message: 'Ano obrigatório' })
  }

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response
      .status(404)
      .json({ message: 'Não existe livro a ser alterado para o ID informado' })
  }

  book.ano = Number(year)

  return response.json({ message: 'Livro alterado.' })
}

export function updateNumPagesBook(request, response) {
  const { id } = request.params
  const { numPages } = request.body

  if (!numPages) {
    return response
      .status(400)
      .json({ message: 'Número de páginas obrigatório' })
  }

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response
      .status(404)
      .json({ message: 'Não existe livro a ser alterado para o ID informado' })
  }

  book.numPaginas = Number(numPages)

  return response.json({ message: 'Livro alterado.' })
}

export function updateAuthorBook(request, response) {
  const { id } = request.params
  const { author } = request.body

  if (!author) {
    return response.status(400).json({ message: 'Autor obrigatório' })
  }

  const book = books.find((book) => book.id === Number(id))

  if (!book) {
    return response
      .status(404)
      .json({ message: 'Não existe livro a ser alterado para o ID informado' })
  }

  book.autor = author

  return response.json({ message: 'Livro alterado.' })
}

export function deleteBook(request, response) {
  const { id } = request.params

  const bookIndex = books.findIndex((book) => book.id === Number(id))

  if (bookIndex < 0) {
    return response
      .status(404)
      .json({ message: 'Não existe livro a ser removido para o ID informado.' })
  }

  books.splice(bookIndex, 1)

  return response.json({ message: 'Livro removido.' })
}
