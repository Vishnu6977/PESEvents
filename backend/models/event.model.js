import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
    time: {
        type: String,
        required: false,
    },
    fee: {
        type: Number,
        required: false,
    },
    overview: {
        type: String,
        required: false,
    },
    upcoming: {
        type: Boolean,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    });

const Event = mongoose.model("Event", eventSchema, 'events');

export default Event;

