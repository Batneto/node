

const getIndex=(req,res)=>{
    res.render('index',{
        titulo:"Index",
    });
}

const getServicios=(req,res)=>{
    res.render('servicios');
}

const getContacto=(req,res)=>{
    res.render('contacto');
 }
 const getSomos=(req,res)=>{
    res.render('quienesSomos');
 }



module.exports={
    getIndex,
    getServicios,
    getContacto,
    getSomos
}