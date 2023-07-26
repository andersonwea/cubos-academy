import express from 'express'
import {
  calcFreight,
  listProductById,
  listProducts,
} from '../controllers/products.js'
import { validateIdParams } from '../middlewares/validateIdParams.js'

export const productsRouter = express.Router()

productsRouter.get('/products', listProducts)
productsRouter.get('/products/:id', listProductById)
productsRouter.get(
  '/products/:id/freight/:zipCode',
  validateIdParams,
  calcFreight,
)
