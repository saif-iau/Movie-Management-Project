const express = require('express');
const router = express.Router();
const {getMovies , checkAvailability , reserveTimeSlot , addMovie} = require('../controllers/movie.controller');

router.get('/', getMovies);
router.post('/create' , addMovie)
router.get('/:movieId/availability/:slotId', checkAvailability);
router.post('/:movieId/reserve/:slotId', reserveTimeSlot);

module.exports = router;
