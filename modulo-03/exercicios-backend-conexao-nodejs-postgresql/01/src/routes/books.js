import express from 'express'
import { createBook } from '../controllers/book-controller.js'

export const bookRoutes = express()

bookRoutes.post('/author/:id/book', createBook)
