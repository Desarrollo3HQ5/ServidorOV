//importaciones
import express from "express"
import {dirname, join} from "path"
import { fileURLToPath } from "url"
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config()
//
import corsI from "cors";
const cors = corsI
import CookieS from "cookie-session";
const cookieSession = CookieS;
//Enrutador
import indexRoutes from './routes/index.js'
//Middleware
import { errors } from "./config/errors.js";
//Objetos
const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views',join(__dirname,'views'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cors());
//Motor de pantillas (EJS)
//Usar el enrutador
app.use(indexRoutes)
app.use(errors)
//usar los archivos staticos
app.use(express.static(join(__dirname,'public')))
//Escuchar el puerto
app.listen(7000)
console.log("Server is listening on port 7000")