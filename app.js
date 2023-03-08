
const express = require('express')


const app = express()
const port = process.env.PORT || 3000

app.use(express.static( __dirname+'/public'));


//* ESTABLECER TEMPLATE ENGINE 

app.set('view engine' , 'ejs')
app.set("views",__dirname + "/views");

//* RUTAS


app.use('/',require('./router/routerFront'))


app.use((req,res)=>{
    res.status(404).render("404",{
        error:404,
        msg:"pagina no encontrada"
    })
})







app.listen(port, () => {
    console.log(`servidor a la escucha del puerto ${port}`);
})

