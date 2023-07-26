import express from 'express'
import { getAddressByZipCode } from '../controllers/address.js'

export const addressRouter = express.Router()

addressRouter.get('/address/:zipcode', getAddressByZipCode)
