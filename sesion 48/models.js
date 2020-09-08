const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
  nombre: String,
  email: String,
  edad: {type: Number, min: 18, required: true },
  role: {
    required: true,
    type: String,
    enum: ['admin', 'user', 'editor']
  }
});

module.exports = {
  UsuarioModel: mongoose.model('Usuario', UsuarioSchema),
}