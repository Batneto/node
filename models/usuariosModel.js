const{Schema,model}=require('mongoose')


const UsuariosSchema=new Schema({
    nombre:{
        type:String,
        require:true
    },
    pass:{
        type:String,
        require:true
    },
    mail:{
        type:String,
        require:true
    }
})



module.exports=model("Usuarios",UsuariosSchema)