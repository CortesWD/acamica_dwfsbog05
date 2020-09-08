const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDb, models } = require('./db');
const router = require('./routes');
dotenv.config();

const app = express();

app.use(bodyParser.json());

const restartDb = true;

const createBaseUser = async () => {
  /* Datos base */
  const user_1 = new models.User({
    nombre: 'cris',
    email: 'cris@email.com',
    edad: 28
  });

  const user_2 = new models.User({
    nombre: 'cami',
    email: 'cami@email.com',
    edad: 28
  });

  await user_1.save()
    .then(doc => console.log('okay'))
    .catch(err => {
      console.log(err.errors)
      res.status(409)
        .send('dato invalido', err.errors)
    });
  // await user_2.save();
}

/*
 * Start Mongo connection, deleting all
*/
connectDb()
  .then(async () => {
    if (restartDb) {
      await Promise.all([
        models.User.deleteMany({})
      ])
    }

    createBaseUser();

    app.listen(process.env.PORT, () => {
      console.log(`starting at: http://${process.env.HOST}:${process.env.PORT}`)
    });
  })
  .catch(e => console.error(e));


router(app);