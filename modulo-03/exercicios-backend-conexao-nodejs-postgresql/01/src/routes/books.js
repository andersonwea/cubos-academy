import express from 'express'
import { createBook, listBooks } from '../controllers/book-controller.js'

export const bookRoutes = express()

bookRoutes.post('/author/:id/book', createBook)
bookRoutes.get('/books', listBooks)
