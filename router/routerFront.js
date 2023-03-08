const express = require('express');
const router = express.Router();

const { getIndex, getServicios, getContacto, getSomos } = require('../controllers/frontControlers.js')

router.get('/', getIndex)

router.get('/servicios', getServicios)
router.get('/contacto', getContacto)
router.get('/quienesSomos', getSomos)



module.exports = router;