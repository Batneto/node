const express = require('express');
const router = express.Router();
const{check}=require('express-validator');
const{validarInputs}=require('../middleware/validarInputs')

const {crearUsuario,getUsuarios,buscarUsuario} = require('../controllers/users.Controlers.js')



router.get('/usuarios',getUsuarios)

router.post('/usuarios',[
    check('nombre','Falta el nombre').not().isEmpty(),
    check('mail','Falta el mail').not().isEmpty(),
    check('mail','el mail esta mal').isEmail(),
    check('pass','Falta la password').not().isEmpty(),
    check('pass','la contraseña tiene que tener un minimo de 5 caracteres   ').isLength({ min: 5 }),
    validarInputs],
    crearUsuario)

router.get('/usuarios/:id',buscarUsuario)


module.exports = router;

