import { getCompany } from '../controllers/company-controller.js'
import { companyRoutes } from './companies.js'
import { Router } from 'express'

export const router = Router()

router.use(companyRoutes, getCompany)
