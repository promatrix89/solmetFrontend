import { Component, OnInit } from '@angular/core';
import { PlanillaFormacionCosto } from 'src/app/models/planilla-formacion-costo';
import { PlanillaService } from 'src/app/services/planilla.service';
import { CommonListarComponent } from '../../common-listar.component';

@Component({
  selector: 'app-planillas',
  templateUrl: './planillas.component.html',
  styleUrls: ['./planillas.component.css']
})
export class PlanillasComponent extends CommonListarComponent<PlanillaFormacionCosto, PlanillaService> implements OnInit {
  
  constructor(service: PlanillaService) { 
    super(service);
    this.titulo="Listado de Planillas";
    this.nombreModel=PlanillaFormacionCosto.name;
    
  }

 

}
