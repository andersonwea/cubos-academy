import express from 'express'
import {
  createBook,
  deleteBook,
  listBooks,
  listBooksById,
  updateAuthorBook,
  updateBook,
  updateNumPagesBook,
  updateTitleBook,
  updateYearBook,
} from '../controllers/books.js'
import { validateIdParams } from '../middlewares/validateIdParams.js'
import { validateBookData } from '../middlewares/validateBookData.js'

export const booksRouter = express.Router()

booksRouter.get('/books', listBooks)

booksRouter.get('/books/:id', validateIdParams, listBooksById)

booksRouter.post('/books', validateBookData, createBook)

booksRouter.put('/books/:id', validateBookData, validateIdParams, updateBook)

booksRouter.patch('/books/:id/title', validateIdParams, updateTitleBook)
booksRouter.patch('/books/:id/year', validateIdParams, updateYearBook)
booksRouter.patch('/books/:id/numPages', validateIdParams, updateNumPagesBook)
booksRouter.patch('/books/:id/author', validateIdParams, updateAuthorBook)

booksRouter.delete('/books/:id', validateIdParams, deleteBook)
