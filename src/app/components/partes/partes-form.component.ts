import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parte } from 'src/app/models/parte';
import { ParteService } from 'src/app/services/parte.service';
import {CommonFormComponent} from 'src/app/components/common-form.component';

@Component({
  selector: 'app-partes-form',
  templateUrl: './partes-form.component.html',
  styleUrls: ['./partes-form.component.css']
})
export class PartesFormComponent  
extends CommonFormComponent<Parte, ParteService>
implements OnInit {

  constructor( service:ParteService, router: Router, route: ActivatedRoute) {
    super(service, router, route);
    this.titulo="Crear parte";
    this.model=new Parte();
    this.redirect="/partes";
    this.nombreModel=Parte.name;
  }



}
