import express from 'express'
import { listPropertieById, listProperties } from '../controllers/properties.js'

export const propertiesRouter = express.Router()

propertiesRouter.get('/properties', listProperties)

propertiesRouter.get('/properties/:id', listPropertieById)
