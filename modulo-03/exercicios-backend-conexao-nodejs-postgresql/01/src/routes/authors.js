import express from 'express'
import { createAuthor, getAuthor } from '../controllers/author-controllers.js'

export const authorRoutes = express()

authorRoutes.post('/authors', createAuthor)

authorRoutes.get('/authors/:id', getAuthor)
