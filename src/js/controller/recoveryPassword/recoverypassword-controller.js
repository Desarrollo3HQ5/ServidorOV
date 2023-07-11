const recoveryPasswordCtrl ={}
//BASE DE DATOS
import {add,all,delete_,one} from "../../DB/mysql.js" 
import { sucess, error } from '../../config/respuestas.js'


const tabla = "control_acceso";
recoveryPasswordCtrl.SearchRecovery = async(req, res, next) => {
    try{
        const items = await one(tabla,req.body.user);
        console.log(items)
        sucess(req,res,items,200);
    }
    catch(err){
        next(err)
    }
}

recoveryPasswordCtrl.recovery = async(req, res, next) => {
    try{
        const items = await one(tabla,req.body.user);
        console.log(items)
        sucess(req,res,items,200);
    }
    catch(err){
        next(err)
    }
}

export {recoveryPasswordCtrl}