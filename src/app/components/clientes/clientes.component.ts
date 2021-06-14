import { Component, OnInit, ViewChild } from '@angular/core';

import { Cliente } from 'src/app/models/cliente';
import { Localidad } from 'src/app/models/localidad';
import { ClienteService } from 'src/app/services/cliente.service';
import { CommonListarComponent } from '../common-listar.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent extends CommonListarComponent<Cliente, ClienteService>  implements OnInit {

 
 //baseEndPoint= BASE_ENDPOINT+'/clientes';
  constructor(service:ClienteService) { 
    super(service);
    this.titulo='Listado de clientes';
    this.nombreModel=Cliente.name;
  }

 
  compareLocalidad(o1:Localidad,o2:Localidad){
    return o1===null || o2===null?false:o1.id===o2.id;
  }

}
