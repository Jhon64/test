import express, {Application, json,Response,Request} from "express"
import bodyParser from "body-parser"
import morgan from "morgan";
import indexRoute from "./routes/index"
import usuarioRouter from "./routes/usuarioRouter"
import cors from "cors"
import "reflect-metadata";
import {createConnection} from "typeorm"

class App{
    private app:Application;
    constructor() {
        this.app=express();
        this.middlewares()
        this.baseDeDatos()
        this.configuracion()
        this.rutas()
        this.cargarServidor()

    }
    async baseDeDatos(){
        try {
            await createConnection()
                .catch(e=>console.log(e))
                .then(res=>console.log("base de datos conectada"))

        }catch (e) {
            console.log(e);
            throw new Error("error al conectar a la base de datos ");
        }

    }
    middlewares(){
        this.app.use(cors())
        //this.app.use(morgan("dev"))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:false}))
    }

    configuracion(){
        this.app.set('port',process.env.PORT||5000);
    }
    rutas(){
        this.app.use(indexRoute);
        this.app.use("/usuario",usuarioRouter);
    }

    cargarServidor(){
        this.app.listen(this.app.get('port'),()=>{
            console.log("levantando servidor http://localhost:"+this.app.get('port'));
        })
    }
}
export default App
