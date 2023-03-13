


const express = require('express');
const router = express.Router();
const{check}=require('express-validator');
const{validarInputs}=require('../middleware/validarInputs')


const { getServicios, getServicio, crearServicio, actualizarServicio, eliminarServicio } = require('../controllers/apiControlers.js')



router.get('/servicios', getServicios)      //* GET
router.get('/servicio/:id', getServicio)   //* FINDONE No es un metodo pero para entenderme

router.post('/servicios',[
    check('servicio','Falta el campo de servicios').not().isEmpty(),
    check('descripcion','Falta el campo de descripcion').not().isEmpty(),
    validarInputs]
, crearServicio)           //*POST

router.put('/servicio/:id',[
    check('servicio','Falta el campo de servicios').not().isEmpty(),
    check('descripcion','Falta el campo de descripcion').not().isEmpty(),
    validarInputs], 
    actualizarServicio)//* PUT
    
router.delete('/servicio/:id', eliminarServicio) //* DELETE




module.exports = router;