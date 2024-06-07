const userModel = require("../models/user.model")
const User = require('../models/user.model');



const checkIfUserExist = async (username) => {
    return await userModel.findOne({ username })
}

const createUser = async (username, password) => {
   return await new User({ username, password })
   
}

module.exports = {checkIfUserExist , createUser}