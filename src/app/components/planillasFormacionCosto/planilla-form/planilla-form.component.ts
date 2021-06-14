import { Component, OnInit } from '@angular/core';
import { PlanillaFormacionCosto } from 'src/app/models/planilla-formacion-costo';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {flatMap, map, startWith} from 'rxjs/operators';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ParteService} from 'src/app/services/parte.service';
import { Parte } from 'src/app/models/parte';
import { LineaOperario } from 'src/app/models/linea-operario';
import { LineaParte } from 'src/app/models/linea-parte';
import { PlanillaService } from 'src/app/services/planilla.service';
import { Operario } from 'src/app/models/operario';
import { OperarioService } from 'src/app/services/operario.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-planilla-form',
  templateUrl: './planilla-form.component.html',
  styleUrls: ['./planilla-form.component.css']
})
export class PlanillaFormComponent  implements OnInit {

  titulo:string='Nueva Planilla';
  planilla:PlanillaFormacionCosto=new PlanillaFormacionCosto();

  autocompleteControl = new FormControl();
  autocompleteControlOperario = new FormControl();
  partesFiltradas: Observable<Parte[]>;
  operariosFiltrados: Observable<Operario[]>;

  constructor( 
    private planillaService: PlanillaService,
    private route: ActivatedRoute,
    private  router:Router,
          private parteService: ParteService,
          private operarioService: OperarioService) {
          
           
}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const planillaId:number=+params.get('planillaId');
  
      if(planillaId){
        this.planillaService.ver(planillaId).subscribe(planilla => {
          this.planilla=planilla;
          console.log(this.planilla);
          
        });
        
      }
      
  }); 
  
  this.partesFiltradas = this.autocompleteControl.valueChanges
  .pipe(
    startWith(''),
    map(value => typeof value === 'string'?value: value.nombre),
    flatMap(value => value ? this._filter(value): [])
  );

  this.operariosFiltrados = this.autocompleteControlOperario.valueChanges
  .pipe(
    startWith(''),
    map(value => typeof value === 'string'?value: value.nombre),
    flatMap(value => value ? this._filterOperario(value): [])
  );
  }

  

  private _filter(value: string): Observable<Parte[]> {
    const filterValue = value.toLowerCase();

    return this.parteService.filtrarPartes(filterValue);
  }

  private _filterOperario(value: string): Observable<Operario[]> {
    const filterValue = value.toLowerCase();
    
    return this.operarioService.filtrarOperarios(filterValue);
  }

  mostrarNombre(parte?:Parte):string | undefined{
    
    return parte?parte.nombre:undefined;
  }

  mostrarNombreOperarios(operario?:Operario):string | undefined{
    
    return operario?operario.nombre:undefined;
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
      this.planilla.lineasParte.push(nuevaLinea);
    }
    
    this.autocompleteControl.setValue('');

    event.option.focus();
    event.option.deselect();
  }

  seleccionarOperario(event: MatAutocompleteSelectedEvent):void{
    let operario= event.option.value as Operario;
    console.log(operario);

    if(this.existeItemOperario(operario.id)){
      this.incrementaHorasAsignadas(operario.id);
    }else {
      let nuevaLinea= new LineaOperario();
      nuevaLinea.operario=operario;
      nuevaLinea.detalle='Horas asignadas al operario '+ operario.nombre;
      this.planilla.lineasOperarios.push(nuevaLinea);
    }
    
    this.autocompleteControlOperario.setValue('');

    event.option.focus();
    event.option.deselect();
  }
  actualizarCantidad(id:number, event:any):void{
    let cantidad: number=event.target.value as number;
    if(cantidad==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.planilla.lineasParte = this.planilla.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        linea.cantidad=cantidad;
      }
      return linea;
    } );
  }

  actualizarCantidadOperario(id:number, event:any):void{
    let horasAsignadas: number=event.target.value as number;
    if(horasAsignadas==0){
      return this.eliminarLineaOperarioPlanilla(id);
    }
    this.planilla.lineasOperarios = this.planilla.lineasOperarios.map((linea:LineaOperario)=>{
      if(id=== linea.operario.id){
        linea.horasAsignadas=horasAsignadas;
      }
      return linea;
    } );
  }
  actualizarPrecioVentaParte(id:number, event:any):void{
    let precioVenta: number=event.target.value as number;
    if(precioVenta==0){
      return this.eliminarLineaPlanilla(id);
    }
    this.planilla.lineasParte= this.planilla.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        linea.precioVenta=precioVenta;
      }
      return linea;
    } );
  }
  actualizarPrecioCosto(id:number, event:any):void{
    let precioCosto: number=event.target.value as number;
    /*if(precioCosto==0){
      return this.eliminarLineaOperarioPlanilla(id);
    }*/
    this.planilla.lineasOperarios= this.planilla.lineasOperarios.map((linea:LineaOperario)=>{
      if(id=== linea.operario.id){
        linea.precioCosto=precioCosto;
      }
      return linea;
    } );
  }
  actualizarPrecioVenta(id:number, event:any):void{
    let precioVenta: number=event.target.value as number;
    if(precioVenta==0){
      return this.eliminarLineaOperarioPlanilla(id);
    }
    this.planilla.lineasOperarios= this.planilla.lineasOperarios.map((linea:LineaOperario)=>{
      if(id=== linea.operario.id){
        linea.precioVenta=precioVenta;
      }
      return linea;
    } );
  }
  existeItem(id:number):boolean{
    let existe=false;
    this.planilla.lineasParte.forEach((linea: LineaParte)=>{
      if(id=== linea.parte.id){
        existe=true;
      }
    })
    return existe;
  }
  existeItemOperario(id:number):boolean{
    let existe=false;
    this.planilla.lineasOperarios.forEach((linea: LineaOperario)=>{
      if(id=== linea.operario.id){
        existe=true;
      }
    })
    return existe;
  }
  incrementaCantidad(id:number):void{
    
    this.planilla.lineasParte = this.planilla.lineasParte.map((linea:LineaParte)=>{
      if(id=== linea.parte.id){
        ++linea.cantidad;
      }
      return linea;
    } );
  }
  incrementaHorasAsignadas(id:number):void{
    
    this.planilla.lineasOperarios = this.planilla.lineasOperarios.map((linea:LineaOperario)=>{
      if(id=== linea.operario.id){
        ++linea.horasAsignadas;
      }
      return linea;
    } );
  }

  eliminarLineaPlanilla(id:number):void{
    this.planilla.lineasParte= this.planilla.lineasParte.filter(
      (linea:LineaParte)=> id !== linea.parte.id
    );
  }
  eliminarLineaOperarioPlanilla(id:number):void{
    this.planilla.lineasOperarios= this.planilla.lineasOperarios.filter(
      (linea:LineaOperario)=> id !== linea.operario.id
    );
  }


  create():void{
    console.log(this.planilla);
    this.planillaService.create(this.planilla).subscribe(planilla => {
      console.log(planilla);
      Swal.fire('Nuevo',`Planilla ${planilla.detalle} creado con éxito`,'success');
      this.router.navigate(['/clientes']);
    });
  }
}
