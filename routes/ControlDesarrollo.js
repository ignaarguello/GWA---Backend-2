const router = require('express').Router();
const { getAllCD, createCD, getCDById, updateCDById, deleteCDById } = require('../controllers/ControlDesarrollo');

router.get('/', getAllCD);
router.post('/', createCD);
router.get('/:id', getCDById);
router.put('/:id', updateCDById);
router.delete('/:id', deleteCDById);

module.exports = router