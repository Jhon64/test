import {DeleteResult, getRepository, UpdateResult} from "typeorm"
import Usuario from "../entity/usuario";

export default class UsuarioModel {
    async listar(): Promise<Array<Usuario>> {
        const list: Array<Usuario> = await getRepository(Usuario).find()
        return list;
    }

    async registrar(newUsuario: Usuario): Promise<Usuario> {
        const save = await getRepository(Usuario).save(newUsuario);
        return save;
    }

    async edit(updateUsuario: Usuario,id:number) {
        const update = await getRepository(Usuario).update(id, updateUsuario)
        return update
    }

    async delete(id: number): Promise<DeleteResult> {
        const result = await getRepository(Usuario).delete({id})
        console.log(result)
        return result
    }
}
