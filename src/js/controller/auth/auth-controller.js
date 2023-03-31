const authCtrl ={}
//BASE DE DATOS
import {add,all,delete_,one,query} from "../../DB/mysql.js" 
import { sucess, error } from '../../config/respuestas.js'

//Importaciones necesarioas
import { hash, compare } from "bcrypt";

//Funciones
import { asignarToken } from "../../autenticacion/index.js";

const tabla = "control_acceso";

authCtrl.login = async (req, res, next) => {
    try{
        const token = await login(req.body.user, req.body.password)
        sucess(req,res,token,200);
    }
    catch(err){
        next(err)
    }
}


async function login(user, password){
    
    const data = await query(tabla, {user:user});
    console.log(data)
    return (compare(password, data.password)
        .then(resultado => {
            if (resultado === true) {
                //Generar token
                return asignarToken({...data})
            }else{
                throw new Error('Informacion invalida , usuario o contraseña son invalidos')
            }
        }))

}

authCtrl.add_auth= async(req, res, next) => {

    const authData={
        id:data.id,
    }
    if (data.user) {
        authData.user = data.user
    }
    if (data.password) {
        authData.password = await hash(data.password.toString(),5)
    }
    return await add(tabla,authData);
}

export {authCtrl}