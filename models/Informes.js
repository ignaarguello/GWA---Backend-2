const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    "nombre": { type: String, required: true },
    "fecha": { type: String, required: true },
    "uso_fertilizantes": { type: Boolean, required: true },
    "transplantes": { type: Boolean, required: true },
})

InformesSchema = mongoose.model('Informes', Schema);

module.exports = InformesSchema