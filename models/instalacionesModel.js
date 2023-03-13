

const {Schema,model } = require("mongoose");


const InstalacionesSchema=new Schema({
    nombre:String,
    descripcion:String,
    rating:Number,
    aforo:Number,
    fecha:{
        type:Date,
        default:Date.now
    }
})




module.exports=model("Instalaciones",InstalacionesSchema)