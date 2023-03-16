const express = require('express')
const router = express.Router();
const{mostrarNuevoServicio,crearNuevoServicio,mostrarTodos,actualizarServicio,actualizando,eliminando}=require('../controllers/adminControllers')



//todo Mostrar servicios y modificaciones

router.get('/administrarServicios',mostrarTodos)

//todo Pagina donde esta el  formulario

router.get('/servicio/nuevo',mostrarNuevoServicio)


//todo Pagina fantasma donde envias el formulario

 router.post('/servicio/update',crearNuevoServicio)


//todo Pagina de actualizar el usuario

router.get('/servicio/actualizar/:id',actualizarServicio)

//todo Pagina fantasma donde envias el formulario para el put 

router.post('/servicio/actualizando/:id',actualizando)

//todo Pagina para eliminar un servicio

router.get('/servicio/eliminando/:id',eliminando)


module.exports = router;