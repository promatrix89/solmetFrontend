import { Iva } from "./iva";
import { PlanillaFormacionCosto } from "./planilla-formacion-costo";


export class LineaPlanilla{
    planilla: PlanillaFormacionCosto;
    cantidad: number = 1;
    total: number;
    precioCosto:number;
    precioVenta:number;
    precioConDescuento:number;
    detalle:string;
    iva: Iva;
    bonificacion: number=0;

    public calcularImporte():number{
        if(this.iva){
            var valorIva=this.iva.valor/100;
            
            this.total=(this.precioConDescuento)*(1+valorIva);
            var valor=this.dosDecimales(this.total);
            return valor;
        }
        this.total=(this.cantidad*this.precioCosto); 
        var valor=this.dosDecimales(this.total);
       
        return  valor; 
    }
    public calcularPrecioDescuento():number{
        
        if(this.bonificacion!==0){
            var subTotal=(this.cantidad*this.precioVenta);
            var descuento=(this.bonificacion/100);
            this.precioConDescuento=subTotal-(subTotal*descuento);
            this.precioConDescuento=this.dosDecimales(this.precioConDescuento);
            var valor=this.dosDecimales(this.precioConDescuento);
           // alert(valor);
            return valor;
        }
        this.precioConDescuento=(this.cantidad*this.precioVenta);
        this.precioConDescuento=this.dosDecimales(this.precioConDescuento);
        var valor=this.dosDecimales(this.precioConDescuento);
       
        return  valor;
    }
    dosDecimales(n) {
        let t=n.toString();
        let regex=/(\d*.\d{0,2})/;
        
        return t.match(regex)[0];
      }
    
}