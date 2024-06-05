const Movie = require('../models/movie.model');

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const checkAvailability = async (req, res) => {
    const { movieId, slotId } = req.body;
    try {
        const movie = await Movie.findById(movieId);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });

        const slot = movie.timeSlots.id(slotId);
        if (!slot) return res.status(404).json({ error: 'Time slot not found' });

        res.status(200).json({ availableCapacity: slot.capacity - slot.booked });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const reserveTimeSlot = async (req, res) => {
    const { movieId, slotId } = req.body;
    const { numPeople } = req.body;

    if (numPeople <= 0) return res.status(400).json({ error: 'Invalid number of people' });

    try {
        const movie = await Movie.findById(movieId);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });

        const slot = movie.timeSlots.id(slotId);
        if (!slot) return res.status(404).json({ error: 'Time slot not found' });

        if (slot.booked + numPeople > slot.capacity) {
            return res.status(400).json({ error: 'Not enough capacity' });
        }

        slot.booked += numPeople;
        await movie.save();

        res.status(200).json({ message: 'Reservation successful', remainingCapacity: slot.capacity - slot.booked });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// this API endpoint is not included in documentation , only used to fill the movie database
const addMovie = async (req , res) => {

  try {
   const {title ,timeSlots} = req.body
   const movie = {}
   if(title && timeSlots) {
     movie = Movie.create({
        title,timeSlots
     })
   }
    
    res.status(201).json({ message: 'movie added', movie });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { reserveTimeSlot , checkAvailability , getMovies , addMovie }