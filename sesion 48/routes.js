const { models } = require('./db');

const userQuery = (param = {}) => models.User.find(param);


userRouter = (app) => {
  app.get('/usuarios/:email?', (req, res) => {
    const { params: { email } } = req;
    /*
     * Responses by email
     */
    if (email && email.length > 3) {
      userQuery({ email })
        .then(queryRes => {
          res.json(queryRes);
        });
    } else {
      /*
      * All Responses
      */
      userQuery().then((dbRes) => {
        res.json(dbRes);
      });
    }
  });

  app.put('/usuarios/:email', (req, res) => {
    const { body, params: { email } } = req;

    const newEntry = new User({...body});

    newEntry.save()
      .then()
      .catch((error) => {
        console.log(error);
      })

    models.User.findOneAndUpdate({ email }, { ...body }, { new: true, runValidators: true })
      .then(() => {
        res.type('text').send('ok')
      })
      .catch(err => {
        res
          .status(400)
          .type('text')
          .send(err)
      });
  })

  app.delete('/usuarios/:email', (req, res) => {
    const { params: { email }} = req;
    models.User.findOneAndRemove(email)
      .then(() => {
        res.type('text').send('ok')
      })
      .catch(err => {
        res
          .status(400)
          .type('text')
          .send(err)
      })
  });
}


module.exports = (app) => {
  userRouter(app);
};