// const { json } = require("express");
const {consulta}=require('../helpers/fetch')
const Servicio = require("../models/servicioModel")


const mostrarTodos=async(req,res)=>{

    try {

       
         const servicios=await Servicio.find()
       
        
        res.render('./admin/indexAdmin', {
            servicios:servicios
        })

    } catch (error) {
        console.log("esta mal");
    };

}

const mostrarNuevoServicio=(req,res)=>{

    res.render('./admin/formularioCrearServicio')

}

const crearNuevoServicio= async(req,res)=>{

    try {

    consulta("/servicios",'post',req.body)

    res.redirect('/admin/administrarServicios')

    } catch (error) {
        console.log(error);
    }
    
}

const actualizarServicio=async(req,res)=>{
    
    try {

        const id=req.params.id

       const urlDeUnServicio=`/servicios/${id}`
       
        const respuesta= await consulta(urlDeUnServicio,'get',req.body)

        const servicioEncontrado= await respuesta.json()
        
        res.render('./admin/actualizarServicio',servicioEncontrado)
         
    } catch (error) {
        console.log(error);
    }

}

const actualizando=async(req,res)=>{

    try {

        const id=req.params.id

        const urlDeUnServicio=`/servicios/${id}`

        consulta(urlDeUnServicio,'put',req.body)

        res.redirect('/admin/administrarServicios')

    } catch (error) {
        
    }
}

const eliminando=async(req,res)=>{
    try {
        const id=req.params.id

        const urlDeUnServicio=`/servicios/${id}`

        consulta(urlDeUnServicio,'delete',req.body)

        res.redirect('/admin/administrarServicios')
        
    } catch (error) {
        
    }
}




module.exports={
    mostrarTodos,
    mostrarNuevoServicio,
    crearNuevoServicio,
    actualizarServicio,
    actualizando,
    eliminando
}