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

export const searchEvent = async (req, res) => {
    try {
        const events = await Event.find({
            title: { $regex: req.params.title, $options: 'i' } 
        });

        if (events.length === 0) {
            return res.status(404).json({ success: false, message: 'No events found' });
        }

        res.status(200).json({ success: true, data: events });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};


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
        const event = await Event.findOneAndUpdate(
            { title: req.params.title }, req.body, { new: true } );

        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        res.status(200).json({ success: true, data: event });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};


export const deleteEvent = async (req, res) => {
    try {
        const deletedEvent = await Event.findOneAndDelete({ title: req.params.title });

        if (!deletedEvent) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }

        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

