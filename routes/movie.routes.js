const express = require('express');
const movieRouter = express.Router();
const {getMovies , checkAvailability , reserveTimeSlot , addMovie} = require('../controllers/movie.controller');
const authenticateToken = require('../middleware/auth');

movieRouter.get('/',authenticateToken, getMovies);
movieRouter.post('/create',authenticateToken , addMovie)
movieRouter.get('/:movieId/availability/:slotId',authenticateToken, checkAvailability);
movieRouter.post('/:movieId/reserve/:slotId',authenticateToken, reserveTimeSlot);

module.exports = movieRouter;
