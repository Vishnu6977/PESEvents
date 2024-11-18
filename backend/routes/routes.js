import express from 'express'
import { createEvent, searchEvent, deleteEvent, getEvents, updateEvent } from '../controllers/event.controllers.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.send('API is running...')
})

router.get('/events', getEvents)

router.post('/events', createEvent)

router.get('/search/:title', searchEvent);

router.put('/events/:title', updateEvent)

router.delete('/events/:title', deleteEvent)

export default router