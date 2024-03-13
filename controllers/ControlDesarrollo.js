// Modela Control Desarrollo
const ControlDesarrolloSchema = require('../models/ControlDesarrollo');

// CRUD
const getAllCD = async (req, res) => {
    const Control_Desarrollo = await ControlDesarrolloSchema.find();
    res.json(Control_Desarrollo);
};

const createCD = async (req, res) => {
    ControlDesarrolloSchema.create(req.body)
    res.json('Control de Desarrollo Creado');
};

const getCDById = async (req, res) => {
    const Control_Desarrollo = await ControlDesarrolloSchema.findById(req.params.id);
    res.json(Control_Desarrollo);
};

const updateCDById = async (req, res) => {
    await ControlDesarrolloSchema.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json('Control de Desarrollo editado con exito');
};

const deleteCDById = async (req, res) => {
    await ControlDesarrolloSchema.findOneAndDelete(req.params.id)
    res.json('Control de Desarrollo eliminado');
};

module.exports = {
    getAllCD,
    createCD,
    getCDById,
    updateCDById,
    deleteCDById,
};