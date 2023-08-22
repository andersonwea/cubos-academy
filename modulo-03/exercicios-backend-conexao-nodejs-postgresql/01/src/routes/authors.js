import express from 'express'
import { createAuthor } from '../controllers/author-controllers.js'

export const authorRoutes = express()

authorRoutes.post('/autors', createAuthor)
