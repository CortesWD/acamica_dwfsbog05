/**
 * Dependencies
 */
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

/**
 * extras
 */
const { auth } = require('./middleware');
const { validateUser } = require('./utils/helpers');

/**
 * Mock DB
 */
const { peliculas } = require('./db');

dotenv.config();
const app = express();

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.error('init error', err);
  console.info('starting server at http://localhost:3000');
});


/**
 * MiddleWares
 */
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  if (!err) {
    console.log(err);
    return next();
  }
  res.status(500).send('Server Error');
});


/**
 * Routes
 */
// app.get('/api/auth', (req, res) => {
//   const user = { user: 'admin' };
//   const token = jwt.sign(user, APP_SIGN);
//   res
//     .type('text')
//     .send(token); 
// });

app.post('/api/login', (req, res) => {
  const { body } = req;
  const { user, password } = body;
  if (!validateUser(user, password)) return res.status(400).type('text').send('user/pass invalid');

  const session = {
    user,
    initSession: new Date()
  };

  const token = jwt.sign(JSON.stringify(session), process.env.API_KEY);
  res
    .status(200)
    .json({ token });
});

app.get('/api/getInfo', auth, (req, res) => {
  res
    .status(200)
    .json({ peliculas });
});