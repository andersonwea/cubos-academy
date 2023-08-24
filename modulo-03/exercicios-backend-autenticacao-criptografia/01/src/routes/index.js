import { Router } from 'express'
import { userRoutes } from './users.js'

export const router = Router()

router.use(userRoutes)
