import express from 'express'
import { createGuest, deleteGuest, listGuests } from '../controllers/guests.js'

export const guestsRouter = express.Router()

guestsRouter.get('/guests', listGuests)

guestsRouter.post('/guests', createGuest)

guestsRouter.delete('/guests/:name', deleteGuest)
