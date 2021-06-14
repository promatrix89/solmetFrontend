import { Generic } from "./generic";
import { Operario } from "./operario";
import { Orden } from "./orden";

export class OrdenDiaOperario implements Generic{
    id:number;
    nombre:string;
    fecha:Date;
    operario:Operario;
    hsAsignadas:number;
    hsTrabajadas:number;
    orden:Orden;

}