import { Component, OnInit } from '@angular/core';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-orden-trabajo',
  templateUrl: './orden-trabajo.component.html',
  styles: [
  ]
})
export class OrdenTrabajoComponent extends CommonListarComponent<Orden, OrdenService>  implements OnInit {

 
  //baseEndPoint= BASE_ENDPOINT+'/clientes';
   constructor(service:OrdenService) { 
     super(service);
     this.titulo='Listado de ordenes de trabajo';
     this.nombreModel=Orden.name;
   }
 
  

}
