import {Router,Request,Response} from "express"
import UsuarioControl from "../controllers/UsuarioControl";
import Usuario from "../entity/usuario";
const router=Router();
const control=new UsuarioControl();
router.get("/",async (req:Request,res:Response)=>{
    try {
        const list=await control.listar()
        res.status(200).send(list)
    }catch (e) {
        console.log(e);
        res.status(400).send(e)
    }
})
router.post("/registrar",async (req:Request,res:Response)=>{
    try{
        const  {usuario,clave}=req.body
        const usuarioUbject=new Usuario();
        usuarioUbject.usuario=usuario
        usuarioUbject.clave=clave
        const result=await control.registrar(usuarioUbject);
        res.status(200).send(result)
    }catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.delete("/delete/:id",async (req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const idx=parseInt(id)
        const result=await control.delete(idx)
        console.log(result)
        res.status(200).send(result)
    }catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})


router.put("/update/:id",async (req:Request,res:Response)=>{
    try {
        const {id}=req.params
        const idx=parseInt(id)
        const {usuario,clave}=req.body
        const usuarioObject=new Usuario();
        usuarioObject.usuario=usuario
        usuarioObject.clave=clave
        const result=await control.update(usuarioObject,idx)
        console.log(result)
        res.status(200).send(result)
    }catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})
export default router
