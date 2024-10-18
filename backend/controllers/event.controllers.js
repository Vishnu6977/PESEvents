import Event from '../models/event.model.js';

export const getEvents = async (req, res) => {
    try {
        const events = await Event.find({}).collection('upcoming')
        res.status(200).json({ success: true, data: events })
    } catch (error) {
        console.log('Error:', error.message)
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}

export const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body)
        res.status(201).json({ success: true, data: event })
    } catch (error) {
        console.log('Error:', error.message)
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}

export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ success: true, data: event })
    } catch (error) {
        console.log('Error:', error.message)
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}

export const deleteEvent = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.status(200).json({ success: true, data: {} })
    } catch (error) {
        console.log('Error:', error.message)
        res.status(500).json({ success: false, message: 'Server Error' })
    }
}
