import { Domicilio } from "./domicilio";
import { Generic } from "./generic";

export class Operario implements Generic{
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    createAt: string;

    cuit: number;
    domicilios: Domicilio[];
}


