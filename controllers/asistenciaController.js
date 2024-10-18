// controllers/asistenciaController.js
const Asistencia = require('../models/asistenciaModel');

exports.registrarAsistencia = async (req, res) => {
  const { idClase, idEstudiante, fecha, presente } = req.body;
  try {
    await Asistencia.registrarAsistencia(idClase, idEstudiante, fecha, presente);
    res.status(201).json({ message: 'Asistencia registrada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar la asistencia' });
  }
};

exports.obtenerAsistencia = async (req, res) => {
  const { idClase } = req.params;
  try {
    const [result] = await Asistencia.getAsistenciaByClase(idClase);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la asistencia' });
  }
};
