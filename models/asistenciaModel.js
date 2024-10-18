// models/asistenciaModel.js
const db = require('./db');

const Asistencia = {
  getAsistenciaByClase: (idClase) => {
    return db.execute('SELECT * FROM asistencia WHERE ID_Clase = ?', [idClase]);
  },
  registrarAsistencia: (idClase, idEstudiante, fecha, presente) => {
    return db.execute(
      'INSERT INTO asistencia (ID_Clase, ID_Estudiante, Fecha, Presente) VALUES (?, ?, ?, ?)',
      [idClase, idEstudiante, fecha, presente]
    );
  },
};

module.exports = Asistencia;
