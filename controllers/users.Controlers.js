const Usuario = require("../models/usuariosModel")



const getUsuarios=async(req,res)=>{

    try {
        const usuarios=await Usuario.find()
       
      return  res.status(200).json({
            ok:true,
            msg:'estos son todos los usuarios',
            total_servicios:usuarios.length,
            data:usuarios
        })
    } catch (error) {
        return  res.status(404).json({
            ok:false,
            msg:'Error al obtener los servicios'
        })
    }
}


const crearUsuario = async (req, res) => {

    const nuevoUsuario = new Usuario(req.body);
    
    try {

        const usuarioData=nuevoUsuario.save()

        return res.status(201).json({
            ok:true,
            msg:"servicio creado",
            data:usuarioData
        })
        

    } catch (error) {
       
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha creado el servicio.'
        });

    } 
}

const buscarUsuario=async(req,res)=>{

    const id=req.params.id

    try {
        const unUsuario=await Usuario.findById(id) 
        if(!unUsuario){
            return res.status(404).json({
                ok:false,
                msg:'el id esta mal'
            })
        }else{
             return  res.status(200).json({
                ok:true,
                msg:'usuario encontrado datos a continuacion:',
                nombre:unUsuario.nombre,
                pass:unUsuario.pass,
                mail:unUsuario.mail
        })
        }
       
    } catch (error) {
        return  res.status(500).json({
            ok:false,
            msg:'Error al obtener el servicio solicitado'
        })
    }
}

module.exports={
    getUsuarios,
    crearUsuario,
    buscarUsuario
}