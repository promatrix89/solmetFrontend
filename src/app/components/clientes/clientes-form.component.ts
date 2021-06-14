import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from 'src/app/models/cliente';

import { Localidad } from 'src/app/models/localidad';
import { ClienteService } from 'src/app/services/cliente.service';
import { CommonFormComponent } from '../common-form.component';
import Swal from 'sweetalert2';
import { Domicilio } from 'src/app/models/domicilio';
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent  extends CommonFormComponent<Cliente,ClienteService> implements OnInit {
  
  

  domicilio:Domicilio= new Domicilio();

  localidades:Localidad[];



  constructor( service:ClienteService,  router: Router,  route: ActivatedRoute) {
    
    super(service,router,route);
    this.titulo="Cargar cliente";
    this.model=new Cliente();
    this.redirect='/clientes';
    this.nombreModel=Cliente.name;



    this.model.domicilios= new Array<Domicilio>(); 
    this.model.domicilios[0]=new Domicilio();
    this.service.listarLocalidades().subscribe(localidades => this.localidades=localidades);
  }

  

  compareLocalidad(o1:Localidad,o2:Localidad){
    return o1===null || o2===null?false:o1.id===o2.id;
  }
}
