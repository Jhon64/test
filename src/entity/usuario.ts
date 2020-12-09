import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export default class Usuario{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({nullable:true,unique:true,length:255,type:"varchar"})
    usuario!:string
    @Column({nullable:true,type:"varchar",length:100})
    clave!:string
    @Column({default:1})
    rol!:number

    @Column({nullable:true})
    persona!:number

}
