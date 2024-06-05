const mongoose = require('mongoose');

// Schema for time slots
const timeSlotSchema = new mongoose.Schema({
    slot: String, // Field to store the specific time of the time slot (e.g., "10:00 AM")
    capacity: Number, // Maximum capacity for the time slot
    booked: { type: Number, default: 0 } // Number of bookings made for the time slot
});

// Schema for movies
const movieSchema = new mongoose.Schema({
    title: String, // Title of the movie
    timeSlots: [timeSlotSchema] // Array of time slots for the movie
});

module.exports = mongoose.model('Movie', movieSchema);
