import express from 'express'
import { getCompany } from '../controllers/company-controller.js'

export const companyRoutes = express()

companyRoutes.get('/companies/:domain', getCompany)
