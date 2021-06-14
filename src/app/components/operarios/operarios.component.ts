import { Component, OnInit } from '@angular/core';
import { Localidad } from 'src/app/models/localidad';
import { Operario } from 'src/app/models/operario';

import { OperarioService } from 'src/app/services/operario.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-operarios',
  templateUrl: './operarios.component.html',
  styleUrls: ['./operarios.component.css']
})
export class OperariosComponent extends CommonListarComponent<Operario,OperarioService> implements OnInit {

  constructor(service:OperarioService) { 
    super(service);
    this.titulo='Listado de operarios';
    this.nombreModel=Operario.name;
  }
  compareLocalidad(o1:Localidad,o2:Localidad){
    return o1===null || o2===null?false:o1.id===o2.id;
  }

  
}
