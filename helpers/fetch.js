const urlBase='http://localhost:3000/api'



const consulta = async(url,method,body) => {

    let options={}

    if(method=='post' || method=='put'){
        const {servicio,descripcion}=body
        await fetch(`${urlBase}`+url,
         options={
            method:method,
            body:JSON.stringify({
                servicio:servicio,
                 descripcion:descripcion
             }),
            headers:{
                'Content-type':'application/json'
            }
        })
    }else{
       await fetch(`${urlBase}`+url,method)
    }
}



module.exports={
    consulta 
}





