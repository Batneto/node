const express = require('express');
const router = express.Router();

const { getIndex, getServicios, getContacto, getSomos,getInstalaciones } = require('../controllers/frontControlers.js')
const {searchGoogle}=require("../controllers/scrap")


router.get('/', getIndex)
router.get('/servicios', getServicios)
router.get('/contacto', getContacto)
router.get('/quienesSomos', getSomos)
router.get('/instalaciones',getInstalaciones)
router.get('/productos',searchGoogle)



module.exports = router;