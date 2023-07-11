import { Router } from "express";
const router = Router();

//CONTROLADORES
//LOGIN
import { loginCtrl } from '../controller/login/login-controller.js'
import { authCtrl } from '../controller/auth/auth-controller.js'
//RECOVERY PASSWORD
import { recoveryPasswordCtrl } from '../controller/recoveryPassword/recoverypassword-controller.js'
//MIDDLEWARE
import { middleware } from '../controller/login/seguridad.js'
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
    next();
  });
 
//Autenticar
router.post("/authLogin",authCtrl.login)

//LOGIN
router.post("/sign",middleware,loginCtrl.login)
router.post("/",middleware,loginCtrl.login)
//REESTABLECER CONTRASEÑA
router.post("/searchRecovery",recoveryPasswordCtrl.SearchRecovery)
//VALIDAR HOJA DE VIDA



//DESPUES DEL LOGUEO LA VISTA DE TODO



// //Gets
// router.get("/empleado/:id", empleadoCtrl.getempleado);
// router.get("/getbiometrico/:id/:estado/:validacion", biometricoCtrl.getBiometrico);
// //POST
// router.post("/addbiometrico/:estado", biometricoCtrl.addBiometrico);
// router.post("/uploadfile/:id", biometricoCtrl.uploadFile);
// //PUT
// router.put("/updatebiometrico/:id",biometricoCtrl.updateBiometrico)




export default router;