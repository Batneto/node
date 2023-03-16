
const Servicio = require("../models/servicioModel")
const Instalaciones=require("../models/instalacionesModel")
const {consulta}=require("../helpers/fetch")



const getIndex = (req, res) => {
    res.render('index', {
        titulo: "Index",
        msg: "este es el mensaje",

    });
}

const getServicios= async (req, res) => {
    
    const respuesta = await consulta('/servicios', 'get', req.body);
    
    const {data, ok}= await respuesta.json()
    
    //console.log(servicios)
    res.render("servicios", {
               titulo: "Servicios",
                msg: "este es el mensaje de servicios actualizado",
    
                servicios:data,
             })
    
    
        
        
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

const mostrarFormularioAdmin=async(req,res)=>{
    res.render('fomularioAdmin');
}

const comprobarLogin=async(req,res)=>{
    try {
           const respuesta= await consulta("/usuarios/",'post',req.body)

           const data= await respuesta.json()
           console.log(data);
        if (data.ok==false) {
            res.redirect('/login')
        }else{
            res.redirect('/admin/administrarServicios')
        }

        
    } catch (error) {
        
    }
    
}






module.exports = {
    getIndex,
    getServicios,
    getContacto,
    getSomos,
    getInstalaciones,
    mostrarFormularioAdmin,
    comprobarLogin
   
}