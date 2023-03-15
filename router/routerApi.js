


const express = require('express');
const router = express.Router();
const{check}=require('express-validator');
const{validarInputs}=require('../middleware/validarInputs')


const { getServicios, getServicio, crearServicio, actualizarServicio, eliminarServicio } = require('../controllers/apiControlers.js')



router.get('/', getServicios)      //* GET
router.get('/:id', getServicio)   //* FINDONE No es un metodo pero para entenderme

router.post('/',[
    check('servicio','Falta el campo de servicios').not().isEmpty(),
    check('descripcion','Falta el campo de descripcion').not().isEmpty(),
    validarInputs]
, crearServicio)           //*POST

router.put('/:id',[
    check('servicio','Falta el campo de servicios').not().isEmpty(),
    check('descripcion','Falta el campo de descripcion').not().isEmpty(),
    validarInputs], 
    actualizarServicio)//* PUT
    
router.delete('/:id', eliminarServicio) //* DELETE




module.exports = router;