import express from 'express'
import { createEvent, deleteEvent, getEvents, updateEvent } from '../controllers/event.controllers.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('API is running...')
})

router.get('/events', getEvents)

router.post('/events', createEvent)

router.put('/events/:id', updateEvent)

router.delete('/events/:id', deleteEvent)

export default router