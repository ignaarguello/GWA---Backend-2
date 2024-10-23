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
    try {
        const InformeUpdate = await SchemaInformes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: 'Informe editado con exito',
            body: InformeUpdate
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: 'Error al editar Informe. Intente nuevamente'
        })
    }
};

const deleteInforme = async (req, res) => {
    try {
        const InformeDelete = await SchemaInformes.findOneAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Informe eliminado con exito',
            body: InformeUpdate
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            message: 'Error al eliminar Informe. Intente nuevamente'
        })
    }
};

module.exports = {
    getAllInformes,
    createInforme,
    getInformeById,
    updateInforme,
    deleteInforme,
}