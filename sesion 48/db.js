const mongoose = require('mongoose');
const { UsuarioModel } = require('./models');

const connectDb = () => mongoose.connect(process.env.DB_URL);

module.exports = {
  connectDb,
  models: {
    User: UsuarioModel
  }
}