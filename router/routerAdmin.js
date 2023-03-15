const express = require('express')
const router = express.Router();
const{mostrarNuevoServicio,crearNuevoUsuario,mostrarTodos}=require('../controllers/adminControllers')



//*Mostrar servicios y modificaciones

router.get('/administrarServicios',mostrarTodos)

//* Mostrar el formulario

router.get('/servicio/nuevo',mostrarNuevoServicio)


//* Creas el formulario(esta ruta no tiene vista)

 router.post('/servicio/update',crearNuevoUsuario)


module.exports = router;