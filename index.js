const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimiter = require('./middleware/rateLimiter');
const movieRouter = require('./routes/movie.routes');
const userRouter = require("./routes/auth.routes")
const authenticateToken = require("./middleware/auth")
require('dotenv').config();

const app = express();
app.use(helmet());
app.use(rateLimiter);
app.use(bodyParser.json());

mongoose.connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use("/auth" , userRouter)
app.use('/api/movies', movieRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
