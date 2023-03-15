const express = require('express');
const router = express.Router();
const{check}=require('express-validator');
const{validarInputs}=require('../middleware/validarInputs')
const {validarJWT}=require("../middleware/validarjwt")
const {crearUsuario,getUsuarios,loginUsuario,renew} = require('../controllers/users.Controlers.js')



router.get('/',getUsuarios)

router.get('/renew',validarJWT,renew)

router.post('/new',[
    check('nombre','Falta el nombre').not().isEmpty(),
    check('mail','el mail esta mal').isEmail().normalizeEmail(),
    check('pass','la contraseña tiene que tener un minimo de 5 caracteres').isLength({ min: 6 ,max:10}).matches(/\d/).withMessage("la contraseña tiene que tener un numero"),
    validarInputs],
    crearUsuario)

router.post('/',[
    check('nombre','Falta el nombre').not().isEmpty(),
    check('mail','el mail esta mal').isEmail().normalizeEmail(),
    check('pass','escriba su contraseña').not().isEmpty(),
    validarInputs],
    loginUsuario)


module.exports = router;

