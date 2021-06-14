import { Cliente } from "./cliente";

import { Generic } from "./generic";
import { OrdenDiaOperario } from "./orden-dia-operario";


export class Orden implements Generic {
    id: number;
    nombre: string;
    fecha: string;
    cliente: Cliente;
    idPresupuesto: number;
    estado:string;
    ordenDiasTrabajosList:OrdenDiaOperario[];
    createAt: string;
    
    
}