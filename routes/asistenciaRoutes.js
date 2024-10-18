// routes/asistenciaRoutes.js
const express = require('express');
const router = express.Router();
const asistenciaController = require('../controllers/asistenciaController');

router.post('/registrar', asistenciaController.registrarAsistencia);
router.get('/:idClase', asistenciaController.obtenerAsistencia);

module.exports = router;
