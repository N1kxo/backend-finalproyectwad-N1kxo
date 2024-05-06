const mongoose = require('mongoose');

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: email, required: true, unique: true },
  password: { type: password, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Crear el modelo de usuario
const User = mongoose.model('User', userSchema);

module.exports = User;
