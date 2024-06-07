const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // Log the Authorization header

    let token;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        token = authHeader.split(' ')[1];
    }

    console.log('Extracted Token:', token); // Log the extracted token

    if (!token) {
        return res.status(401).json({ error: 'Access token missing or invalid' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error('Token verification error:', err); // Log error
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
