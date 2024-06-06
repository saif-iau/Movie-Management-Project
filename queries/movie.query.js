const movieModel = require("../models/movie.model");


const getMovieById = async (movieId) =>  {

    return  await movieModel.findById(movieId);
}

const getTimeSlot = async (slotId , movie) => {
  return await  movie.timeSlots.id(slotId);
}

const getAllMovies = async () => {
    return await movieModel.find({});
}
module.exports = {getMovieById , getTimeSlot , getAllMovies}