

import { Domicilio } from "./domicilio";
import { Generic } from "./generic";
import { PlanillaFormacionCosto } from "./planilla-formacion-costo";
import { Presupuesto } from "./presupuesto";


export class Cliente implements Generic {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    createAt: string;
    razonSocial: string;
    nombreFantasia: string;
    cuit: number;
    domicilios: Domicilio[];
    presupuestoList: Presupuesto[]=[];
    
}

