// const { json } = require("express");
const {consulta}=require('../helpers/fetch')


const Servicio = require("../models/servicioModel")

const mostrarTodos=async(req,res)=>{

    try {
        const servicios=await Servicio.find()
        console.log(servicios); 
        res.render('./admin/serviciosAdmingit ', {
            titulo: "servicios",
            msg: "este es el mensaje",
            servicios:servicios
        })

    } catch (error) {
        console.log("esta mal");
    }
   
        ;

}

const mostrarNuevoServicio=(req,res)=>{

    res.render('./admin/vistaNuevoServicio')


}

const crearNuevoUsuario= async(req,res)=>{

    try {

    consulta("/servicios",'post',req.body)


    res.redirect('/admin/servicio/nuevo')

    } catch (error) {
        console.log(error);
    }

    // const datos=req.body
    
    

}
 // const {servicio,descripcion}=req.body

        // await fetch('http://localhost:3000/api/servicios',{
        //     method:'post',
        //     body:JSON.stringify({
        //         servicio:servicio,
        //         descripcion:descripcion
        //     }),
        //     headers:{
        //         'Content-type':'application/json'
        //     }
        // })

module.exports={
    mostrarTodos,
    mostrarNuevoServicio,
    crearNuevoUsuario
}