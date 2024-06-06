const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;



const checkValidID = (movieId , slotId) => {
    if (!ObjectId.isValid(movieId) || !ObjectId.isValid(slotId)) {
        return "Invalid"
    }
    else {
        return "valid"
    }
   
}

module.exports = {checkValidID}