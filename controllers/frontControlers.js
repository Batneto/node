
const Servicio = require("../models/servicioModel")
const Instalaciones=require("../models/instalacionesModel")



const getIndex = (req, res) => {
    res.render('index', {
        titulo: "Index",
        msg: "este es el mensaje",

    });
}

const getServicios =async (req, res) => {

    try {
        const servicios=await Servicio.find()
        console.log(servicios); 
        res.render('servicios', {
            titulo: "servicio",
            msg: "este es el mensaje",
            servicios:servicios
        })

    } catch (error) {
        console.log("esta mal");
    }
   
        ;
}

const getContacto = (req, res) => {
    res.render('contacto');
}

const getSomos = (req, res) => {
    res.render('quienesSomos');
}


const getInstalaciones=async(req,res)=>{
    try {
        const instalaciones=await Instalaciones.find() 
        res.render('instalaciones', {
            titulo: "instalaciones",
            msg: "Estas son nuestras instalaciones",
            instalaciones
        })

    } catch (error) {
        console.log("esta mal");
    }
        ;
}

// const getProductos=async(req,res)=>{
//     try {

//         res.render('productos')

//     } catch (error) {
//         console.log("esta mal");
//     }
//         ;
// }





module.exports = {
    getIndex,
    getServicios,
    getContacto,
    getSomos,
    getInstalaciones,
   
}