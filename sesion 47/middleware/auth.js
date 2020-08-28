const jwt = require('jsonwebtoken');
const { APP_SIGN } = require('./../utils/constants');

/**
 * @description Middleware to auth User user
 */
const authUser = (req, res, next) => {
  const { headers: { authorization } } = req;
  const token = authorization && authorization.split(' ').pop();
  if (!token) return res.status(400).type('text').send('missing auth');

  jwt.verify(token, APP_SIGN, (err, user) => {
    if (err) return res.status(403).type('text').send('denied request');
    req.user = user;
    return next();
  });
}


module.exports = authUser;