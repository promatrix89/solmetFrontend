import { Component, OnInit } from '@angular/core';
import { Parte } from 'src/app/models/parte';
import { ParteService } from 'src/app/services/parte.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent extends CommonListarComponent<Parte, ParteService> implements OnInit {

  constructor(service: ParteService) { 
    super(service);
    this.titulo="Listado de Partes";
    this.nombreModel=Parte.name;
  }


}
