const jwt = require('jsonwebtoken');

/**
 * @description Middleware to auth User user
 */
const authUser = (req, res, next) => {
  const { headers: { authorization } } = req;
  const token = authorization && authorization.split(' ').pop();
  if (!token) return res.status(400).type('text').send('missing auth');

  jwt.verify(token, process.env.API_KEY, (err, user) => {
    if (err) return res.status(403).type('text').send('denied request');
    req.user = user;
    return next();
  });
}


module.exports = authUser;