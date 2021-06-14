import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, map, startWith } from 'rxjs/operators';
import { FormaPago } from 'src/app/models/forma-pago';
import { Iva } from 'src/app/models/iva';
import { LineaParte } from 'src/app/models/linea-parte';
import { LineaPlanilla } from 'src/app/models/linea-planilla';
import { Parte } from 'src/app/models/parte';
import { PlanillaFormacionCosto } from 'src/app/models/planilla-formacion-costo';
import { Presupuesto } from 'src/app/models/presupuesto';
import { ClienteService } from 'src/app/services/cliente.service';
import { FormaPagoService } from 'src/app/services/forma-pago.service';
import { IvaService } from 'src/app/services/iva.service';
import { ParteService } from 'src/app/services/parte.service';
import { PlanillaService } from 'src/app/services/planilla.service';
import { PresupuestoService } from 'src/app/services/presupuestos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-presupuestos-form',
  templateUrl: './presupuestos-form.component.html',
  styles: [
  ]
})
export class PresupuestosFormComponent implements OnInit {

  titulo:string='Nuevo Presupuesto';
  presupuesto: Presupuesto=new Presupuesto();
  autocompleteControl = new FormControl();
  autocompleteControlPlanilla = new FormControl();
  partesFiltradas: Observable<Parte[]>;
  planillasFiltradas: Observable<PlanillaFormacionCosto[]>;
  iva: Iva[];
  formaPago: FormaPago[];
  unidadTiempo:String[]=[
    "días","semanas", "meses", "años"
];

  constructor(private presupuestoService: PresupuestoService,
    private route: ActivatedRoute,
    private  router:Router,
          private parteService: ParteService,
          private planillaService: PlanillaService,private clienteService: ClienteService,
          private ivaService:IvaService, private formaPagoService:FormaPagoService
          ) {

            this.formaPagoService.listar().subscribe(fp => this.formaPago=fp);
            this.ivaService.listar().subscribe(iva => {console.log(this.iva);this.iva=iva; });
              
           }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const clienteId:number=+params.get('clienteId');
  
      if(clienteId){
        this.clienteService.ver(clienteId).subscribe(cliente => {
          this.presupuesto.cliente=cliente;
          
          
        });
        
      }
      
  }); 


    this.partesFiltradas = this.autocompleteControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string'?value: value.nombre),
      flatMap(value => value ? this._filter(value): [])
    );

    this.planillasFiltradas = this.autocompleteControlPlanilla.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string'?value: value.nombre),
      flatMap(value => value ? this._filterPlanilla(value): [])
    );
    
   
  }

  private _filter(value: string): Observable<Parte[]> {
    const filterValue = value.toLowerCase();

    return this.parteService.filtrarPartes(filterValue);
  }
 actualizarTiempo(event:any){
    let unidadTiempo: string=event.target.value as string;
    this.presupuesto.unidadTiempo=unidadTiempo;
    alert(this.unidadTiempo);
  }
  private _filterPlanilla(value: string): Observable<PlanillaFormacionCosto[]> {
    const filterValue = value.toLowerCase();

    return this.planillaService.filtrarPlanillas(filterValue);
  }
  mostrarNombre(parte?:Parte):string | undefined{
    
    return parte?parte.nombre:undefined;
  }

  seleccionarParte(event: MatAutocompleteSelectedEvent):void{
    let parte= event.option.value as Parte;
    console.log(parte);

    if(this.existeItem(parte.id)){
      this.incrementaCantidad(parte.id);
    }else {
      let nuevaLinea= new LineaParte();
      nuevaLinea.parte=parte;
      nuevaLinea.precioCosto=parte.precioCosto;
      nuevaLinea.precioVenta=parte.precioVenta;
      nuevaLinea.detalle=parte.nombre;
      this.presupuesto.lineasParte.push(nuevaLinea);
    }
    
    this.autocompleteControl.setValue('');

    event.option.focus();
    event.option.deselect();
  }
  actualizarCantidad(id:number, event:any):void{
    let cantidad: number=event.target.value as number;
    if(cantidad==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.presupuesto.lineasParte = this.presupuesto.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        linea.cantidad=cantidad;
      }
      return linea;
    } );
  }
  actualizarBonificacion(id:number, event:any):void{
    let bonificacion: number=event.target.value as number;
   
    this.presupuesto.lineasPlanillas = this.presupuesto.lineasPlanillas.map((linea:LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        linea.bonificacion=bonificacion;
      }
      return linea;
    } );
  }
  actualizarPrecioVentaParte(id:number, event:any):void{
    let precioVenta: number=event.target.value as number;
    if(precioVenta==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.presupuesto.lineasParte= this.presupuesto.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        linea.precioVenta=precioVenta;
      }
      return linea;
    } );
  }
  existeItem(id:number):boolean{
    let existe=false;
    this.presupuesto.lineasParte.forEach((linea: LineaParte)=>{
      if(id=== linea.parte.id){
        existe=true;
      }
    })
    return existe;
  }
  incrementaCantidad(id:number):void{
    
    this.presupuesto.lineasParte = this.presupuesto.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        ++linea.cantidad;
      }
      return linea;
    } );
  }

  
  actualizarPrecioCosto(id:number, event:any):void{
    let precioCosto: number=event.target.value as number;
    /*if(precioCosto==0){
      return this.eliminarLineaOperarioPlanilla(id);
    }*/
    this.presupuesto.lineasPlanillas= this.presupuesto.lineasPlanillas.map((linea:LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        linea.precioCosto=precioCosto;
      }
      return linea;
    } );
  }
  
  actualizarPrecioVenta(id:number, event:any):void{
    let precioVenta: number=event.target.value as number;
    if(precioVenta==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.presupuesto.lineasPlanillas= this.presupuesto.lineasPlanillas.map((linea:LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        linea.precioVenta=precioVenta;
      }
      return linea;
    } );
  }
  eliminarLineaPlanilla(id:number):void{
    this.presupuesto.lineasPlanillas= this.presupuesto.lineasPlanillas.filter(
      (linea:LineaPlanilla)=> id !== linea.planilla.id
    );
  }
  actualizarCantidadPlanilla(id:number, event:any):void{
    let cantidad: number=event.target.value as number;
    if(cantidad==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.presupuesto.lineasPlanillas = this.presupuesto.lineasPlanillas.map((linea:LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        linea.cantidad=cantidad;
      }
      return linea;
    } );
  }
  mostrarDetallePlanillas(planilla?:PlanillaFormacionCosto):string | undefined{
    
    return planilla?planilla.detalle:undefined;
  }
  incrementaCantidadPlanilla(id:number):void{
    
    this.presupuesto.lineasPlanillas = this.presupuesto.lineasPlanillas.map((linea:LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        ++linea.cantidad;
      }
      return linea;
    } );
  }
  existeLineaPlanilla(id:number):boolean{
    let existe=false;
    this.presupuesto.lineasPlanillas.forEach((linea: LineaPlanilla)=>{
      if(id=== linea.planilla.id){
        existe=true;
      }
    })
    return existe;
  }
  seleccionarPlanilla(event: MatAutocompleteSelectedEvent):void{
    let planilla= event.option.value as PlanillaFormacionCosto;
   

    if(this.existeLineaPlanilla(planilla.id)){
      this.incrementaCantidadPlanilla(planilla.id);
    }else {
      let nuevaLinea= new LineaPlanilla();
      nuevaLinea.planilla=planilla;
      nuevaLinea.precioCosto=planilla.totalCostos;
      nuevaLinea.precioVenta=planilla.totalCostos;
      nuevaLinea.detalle='Planilla: '+ planilla.detalle;
      this.presupuesto.lineasPlanillas.push(nuevaLinea);
    }
    
    this.autocompleteControlPlanilla.setValue('');

    event.option.focus();
    event.option.deselect();
  }

  create():void{
    console.log(this.presupuesto);
    
    this.presupuestoService.create(this.presupuesto).subscribe(planilla => {
      //console.log(planilla);
      Swal.fire('Nuevo',`Presupuesto ${this.presupuesto.detalle} creado con éxito`,'success');
      this.router.navigate(['/clientes']);
    }); 
  }

  compareIva(o1:Iva,o2:Iva){
    return o1===null || o2===null?false:o1.id===o2.id;
  }
}
