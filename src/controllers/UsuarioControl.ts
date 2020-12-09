import UsuarioModel from "../models/UsuarioModel";
import Usuario from "../entity/usuario";

export default class UsuarioControl{
    private model:UsuarioModel
    constructor() {
        this.model=new UsuarioModel();
    }

    async listar(){
        return await this.model.listar();
    }

    async registrar(usuario:Usuario){
        return await this.model.registrar(usuario);
    }

    async update(usuario:Usuario,id:number){
        return await this.model.edit(usuario,id);
    }
    async delete(id:number){
        return await this.model.delete(id);
    }
}
