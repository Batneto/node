const Usuario = require("../models/usuariosModel")
const bcrypt = require("bcryptjs")
const { generarJwt } = require("../helpers/jwt")



const getUsuarios = async (req, res) => {

    try {
        const usuarios = await Usuario.find()

        return res.status(200).json({
            ok: true,
            msg: 'estos son todos los usuarios',
            total_usuarios: usuarios.length,
            data: usuarios
        })
    } catch (error) {
        return res.status(404).json({
            ok: false,
            msg: 'Error al obtener los servicios'
        })
    }
}


const crearUsuario = async (req, res) => {


    const { nombre, pass, mail } = req.body


    const user = await Usuario.findOne({ mail })



    try {
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'el mail ya existe.'
            })
        } else {

            const nuevoUsuario = new Usuario(req.body);

            let salt = bcrypt.genSaltSync(10);
            nuevoUsuario.pass = bcrypt.hashSync(pass, salt);

            await nuevoUsuario.save()

            const token = await generarJwt(nuevoUsuario.id, nombre)
            
            return res.status(201).json({
                ok: true,
                uid: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                mail: nuevoUsuario.mail,
                token

            })

        }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha creado el usuario.'
        });

    }
}

const loginUsuario = async (req, res) => {

    const { nombre, pass, mail } = req.body


    const user = await Usuario.findOne({ mail })

    const passUser = bcrypt.compareSync(pass, user.pass)
    console.log(passUser);

    try {
        if (!user) {
            return res.status(401).json({
                ok: false,
                msg: 'no existe ese usuario en la base de datos.'
            })
        } else if (!passUser) {
            return res.status(401).json({
                ok: false,
                msg: 'la contraseña esta mal.'
            })
        } else {
            const token = await generarJwt(user.id, nombre)
            return res.status(200).json({
                ok: true,
                msg: 'login ok, comprobar password.',
                data:{
                    msg:"su toquen caballero",
                    token
                }
            })
        }
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha creado el usuario.'
        });

    }
}
//*renew

const renew = (req, res) => {

    const { uid, nombre } = req;
    const token = jwtGenerator(uid, nombre);

    return res.status(200).json({
        ok: true,
        user: {
            uid,
            nombre
        },
        msg: 'renew jwt',
        token
    })
}



module.exports = {
    getUsuarios,
    crearUsuario,
    loginUsuario,
    renew
}