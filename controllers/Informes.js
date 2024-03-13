// Modelo de Informes
const SchemaInformes = require('../models/Informes');

// CRUD
const getAllInformes = async (req,res) => {
    const InformesTotal = await SchemaInformes.find();
    res.json(InformesTotal);
};

const createInforme = async (req, res) => {
    InformeCreate = SchemaInformes.create(req.body);
    res.json('Informe Creado Correctamente');
};

const getInformeById = async (req, res) => {
    InformeFoundById = await SchemaInformes.findById(req.params.id);
    res.json(InformeFoundById);
};

const updateInforme = async (req, res) => {
    await SchemaInformes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
    res.json('Informe editado con exito');
};

const deleteInforme = async (req, res) => {
    await SchemaInformes.findOneAndDelete(req.params.id);
    res.json('Informe eliminado satisfactoriamente');
};

module.exports = {
    getAllInformes,
    createInforme,
    getInformeById,
    updateInforme,
    deleteInforme,
}