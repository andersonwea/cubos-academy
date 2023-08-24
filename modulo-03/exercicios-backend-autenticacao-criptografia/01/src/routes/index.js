import { Router } from 'express'
import { userRoutes } from './users.js'
import { pokemonRoutes } from './pokemos.js'
import { checkLoginUser } from '../middlewares/check-login-user.js'

export const router = Router()

router.use(userRoutes)

router.use(checkLoginUser, pokemonRoutes)
