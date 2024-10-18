// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuario = async (req, res) => {
  const { nombre, apellido, email, contraseña, tipoUsuario } = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(contraseña, salt);
    await Usuario.registrarUsuario(nombre, apellido, email, hashedPassword, tipoUsuario);
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

exports.loginUsuario = async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const [usuario] = await Usuario.getUsuarioByEmail(email);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    const esValida = await bcrypt.compare(contraseña, usuario.Contraseña);
    if (!esValida) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }
    const token = jwt.sign({ id: usuario.ID_Usuario, tipo: usuario.Tipo_Usuario }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
