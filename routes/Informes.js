const router = require('express').Router();
const { getAllInformes, createInforme, getInformeById, updateInforme, deleteInforme } = require('../controllers/Informes')

router.get('/', getAllInformes);
router.post('/', createInforme);
router.get('/:id', getInformeById);
router.put('/:id', updateInforme);
router.delete('/:id', deleteInforme);

module.exports = router