import { Router } from 'express'
import { authorRoutes } from './authors.js'

export const router = Router()

router.use(authorRoutes)
