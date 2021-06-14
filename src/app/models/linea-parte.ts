import { Parte } from "./parte";

export class LineaParte {
    parte: Parte;
    cantidad: number = 1;
    total: number;
    precioCosto:number;
    precioVenta:number;
    detalle:string;

    public calcularImporte():number{
        this.total=this.cantidad*this.precioVenta;
        return this.total;
    }

}
