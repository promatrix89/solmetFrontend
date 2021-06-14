import { Component, OnInit } from '@angular/core';
import { Iva } from 'src/app/models/iva';
import { IvaService } from 'src/app/services/iva.service';
import { CommonListarComponent } from '../../common-listar.component';

@Component({
  selector: 'app-iva',
  templateUrl: './iva.component.html',
  styles: [
  ]
})
export class IvaComponent extends CommonListarComponent<Iva, IvaService> implements OnInit {

  constructor(service: IvaService) { 
    super(service);
    this.titulo="Listado de Iva";
    this.nombreModel=Iva.name;
  }

}


