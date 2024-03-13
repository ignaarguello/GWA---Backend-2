const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    "nombre": { type: String, required: true },
    "imagen": { type: String, required: true },
    "fecha_plantacion": { type: String, required: true },
    "genetica": { type: String, required: true },
    "capacidad_maceta": { type: String, required: true },
    "informacion_adicional": { type: String, required: false },
})

ControlDesarrolloSchema = mongoose.model('Control', Schema)


module.exports = ControlDesarrolloSchema



