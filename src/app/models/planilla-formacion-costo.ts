import { Cliente } from "./cliente";
import { Generic } from "./generic";
import { LineaOperario } from "./linea-operario";
import { LineaParte } from "./linea-parte";

export class PlanillaFormacionCosto implements Generic{
    id: number;
    nombre:string;
    fecha: string;
    totalCostos: number;
    detalle: string;
    lineasParte: Array<LineaParte>=[];
   
    lineasOperarios: Array<LineaOperario>=[];
   // cliente: Cliente;
    createAt: string;

    calcularTotal():number{
        this.totalCostos=0;
        this.lineasParte.forEach((lineas:LineaParte)=>{
            this.totalCostos+=lineas.calcularImporte();
        });
        this.lineasOperarios.forEach((lineas:LineaOperario)=>{
            this.totalCostos+=lineas.calcularImporte();
        });
        return this.totalCostos;
    }

    
}
