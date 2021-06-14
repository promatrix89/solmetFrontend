import { Component, OnInit } from '@angular/core';
import { Presupuesto } from 'src/app/models/presupuesto';
import { PresupuestoService } from 'src/app/services/presupuestos.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styles: [
  ]
})
export class PresupuestosComponent extends CommonListarComponent<Presupuesto,PresupuestoService> implements OnInit {

  constructor(service:PresupuestoService) { 
    super(service);
    this.titulo='Listado de presupuestos';
    this.nombreModel=Presupuesto.name;
  }



}
