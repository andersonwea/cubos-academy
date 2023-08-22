import { Router } from 'express'
import { authorRoutes } from './authors.js'
import { bookRoutes } from './books.js'

export const router = Router()

router.use(authorRoutes)
router.use(bookRoutes)
