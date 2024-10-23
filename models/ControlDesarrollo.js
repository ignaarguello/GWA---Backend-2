const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    "imagen": { type: String, required: true },
    "nombre": { type: String, required: true },
    "genetica": { type: String, required: true },
    "tipo_genetica": { type: String, required: true },
    "estado": { type: String, required: false },
    "fecha_plantacion": { type: String, required: true },
})

ControlDesarrolloSchema = mongoose.model('Desarrollo', Schema)


module.exports = ControlDesarrolloSchema



