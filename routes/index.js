const router = require('express').Router();

// Require de todos los modulos de rutas del proyecto
const ControlDesarrolloRoutes = require('./ControlDesarrollo');
const InformesRoutes = require('./Informes');


// Usamos Router 'Use' para conectar los modulos
router.use('/desarrollo', ControlDesarrolloRoutes);
router.use('/informes', InformesRoutes);


module.exports = router;