import { chequearToken } from "../../autenticacion/index.js";

function middleware(req, res , next){
    chequearToken.confirmar(req)
    next() 
}

export {middleware}