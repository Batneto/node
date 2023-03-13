const Servicio = require("../models/servicioModel")

const getServicios=async(req,res)=>{

    try {
        const servicios=await Servicio.find()
       
      return  res.status(200).json({
            ok:true,
            msg:'Obteniendo todos los servicios',
            total_servicios:servicios.length,
            data:servicios
        })
    } catch (error) {
        return  res.status(404).json({
            ok:false,
            msg:'Error al obtener los servicios'
        })
    }

    
}
// recoger un servicio
const getServicio= async(req,res)=>{
    
    const id=req.params.id

    try {
        const unServicio=await Servicio.findById(id) //* HACER CONDICIONAL SI NO LO ENCUENTRA(404)
        if(!unServicio){
            return res.status(404).json({
                ok:false,
                msg:'el id esta mal'
            })
        }else{
             return  res.status(200).json({
                ok:true,
                msg:'Obteniendo un servicio',
                servicioEncontrado:unServicio
        })
        }
       
    } catch (error) {
        return  res.status(500).json({
            ok:false,
            msg:'Error al obtener el servicio solicitado'
        })
    }
   
}

// crear un servicio
const crearServicio = async (req, res) => {

    const nuevoServicio = new Servicio(req.body);
    

    try {

        const servicioData=nuevoServicio.save()
        if(!servicioData){
            return res.status(404)
        }else{
            return res.status(201).json({
            ok:true,
            msg:"servicio creado",
            data:servicioData
        })
        }
        
        

    } catch (error) {
       
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha creado el servicio.'
        });

    } 
}

// actualizar un servicio
const actualizarServicio= async(req,res)=>{

    try {  
        const id = req.params.id;
        const servicio = req.body.servicio;
        const descripcion = req.body.descripcion;
        const servicioActualizado = await Servicio.findOneAndUpdate({_id:id},{$set:{servicio,descripcion}},{new:true});
            return res.status(201).json({
                ok:true,
                msg:"actualizazndo servicio",
                data:servicioActualizado
            })
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha encontrado el servicio que quiere actualizar.'
        });

    };
}

 


// eliminar un servicio
const eliminarServicio= async(req,res)=>{

    const id=req.params.id

   try {

        await Servicio.findOneAndDelete({_id:id});

        return res.status(200).json({
            ok: true,
            msg: 'Servicio eliminado correctamente.'
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el servicio que quiere eliminar no existe.'
        });

    }
}



module.exports={
    getServicios,
    getServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio
}