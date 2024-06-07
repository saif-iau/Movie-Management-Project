const express = require('express');
const userRouter = express.Router();
const {loginUser , registerUser} = require('../controllers/auth.controller');

userRouter.post('/login', loginUser);
userRouter.post('/register' , registerUser)

module.exports = userRouter;
