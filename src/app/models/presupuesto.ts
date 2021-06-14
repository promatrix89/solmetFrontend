
import { Cliente } from "./cliente";
import { FormaPago } from "./forma-pago";
import { Generic } from "./generic";
import { LineaParte } from "./linea-parte";
import { LineaPlanilla } from "./linea-planilla";

export class Presupuesto implements Generic {
    id: number;
    nombre: string;
    fecha: string;
    total: number;
    detalle: string;
    cliente: Cliente;
    lineasParte: Array<LineaParte>=[];
    lineasPlanillas: Array<LineaPlanilla>=[];
    createAt: string;
    periodoValidez: number;
    unidadTiempo:string;
    formaPago: FormaPago;

    calcularTotal():number{
        this.total=0;
        this.lineasParte.forEach((lineas:LineaParte)=>{
            this.total+=lineas.calcularImporte();
        });
        this.lineasPlanillas.forEach((lineas:LineaPlanilla)=>{
            this.total+=lineas.calcularImporte();
        });
        return this.total;
    }
}