const loginCtrl ={}
//BASE DE DATOS
import {add,all,delete_,one} from "../../DB/mysql.js" 
import { sucess, error } from '../../config/respuestas.js'

const tabla = "control_acceso";

loginCtrl.login = async(req, res, next) => {
    try{
        const items = await one(tabla,"1106308650");
        console.log(items)
        sucess(req,res,items,200);
    }
    catch(err){
        next(err)
    }
}

export {loginCtrl}