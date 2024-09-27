// Modelo de Informes
const SchemaInformes = require('../models/Informes');

// CRUD
const getAllInformes = async (req, res) => {
    try {
        const InformesTotal = await SchemaInformes.find();
        res.status(200).json({
            success: true,
            message: 'Informes Obtenidos con exito!',
            body: InformesTotal
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: 'Error al obtener data'
        })
    }
};

const createInforme = async (req, res) => {
    try {
        InformeCreate = SchemaInformes.create(req.body);
        res.status(200).json({
            success: true,
            message: 'Informe creado con exito!',
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: 'Error al crear Informe. Intente nuevamente'
        })
    }
};

const getInformeById = async (req, res) => {
    try {
        InformeFoundById = await SchemaInformes.findById(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Informe encontrado con exito!',
            body: InformeFoundById
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: 'Error al encontrar Informe. Intente nuevamente'
        })
    }
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