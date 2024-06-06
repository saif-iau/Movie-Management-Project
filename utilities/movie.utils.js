const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;



const checkValidID = (movieId , slotId) => {
    if (!ObjectId.isValid(movieId) || !ObjectId.isValid(slotId)) {
        return res.status(400).json({ error: 'Invalid ID format' });
    }
   
}

module.exports = {checkValidID}