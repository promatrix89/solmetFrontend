import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domicilio } from 'src/app/models/domicilio';
import { Localidad } from 'src/app/models/localidad';
import { Operario } from 'src/app/models/operario';
import { OperarioService } from 'src/app/services/operario.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-operarios-form',
  templateUrl: './operarios-form.component.html',
  styleUrls: ['./operarios-form.component.css']
})
export class OperariosFormComponent extends CommonFormComponent<Operario, OperarioService> implements OnInit {


  domicilio:Domicilio= new Domicilio();

  localidades:Localidad[];
  constructor(service:OperarioService,  router: Router,  route: ActivatedRoute) { 
    super(service, router, route);
    this.titulo="Cargar operarios";
    this.model=new Operario();
    this.redirect='/operarios';
    this.nombreModel=Operario.name;



    this.model.domicilios= new Array<Domicilio>(); 
    this.model.domicilios[0]=new Domicilio();
    this.service.listarLocalidades().subscribe(localidades => this.localidades=localidades);

  }

  compareLocalidad(o1:Localidad,o2:Localidad){
    return o1===null || o2===null?false:o1.id===o2.id;
  }

}
