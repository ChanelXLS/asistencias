// models/usuarioModel.js
const db = require('./db');

const Usuario = {
  getUsuarioByEmail: (email) => {
    return db.execute('SELECT * FROM usuarios WHERE Email = ?', [email]);
  },
  registrarUsuario: (nombre, apellido, email, contraseña, tipoUsuario) => {
    return db.execute(
      'INSERT INTO usuarios (Nombre, Apellido, Email, Contraseña, Tipo_Usuario) VALUES (?, ?, ?, ?, ?)',
      [nombre, apellido, email, contraseña, tipoUsuario]
    );
  },
};

module.exports = Usuario;
