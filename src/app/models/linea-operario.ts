
import { Operario } from "./operario";


export class LineaOperario {
    operario: Operario;
    total: number;
    detalle:string;
    horasAsignadas: number=1;
    precioCosto: number=1;
    precioVenta: number=1;


    public calcularImporte():number{
        this.total=this.horasAsignadas*this.precioVenta;
        return this.total;
    }
}
