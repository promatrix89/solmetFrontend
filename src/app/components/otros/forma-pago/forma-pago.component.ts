import { Component, OnInit } from '@angular/core';
import { FormaPago } from 'src/app/models/forma-pago';
import { FormaPagoService } from 'src/app/services/forma-pago.service';

import { CommonListarComponent } from '../../common-listar.component';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styles: [
  ]
})
export class FormaPagoComponent  extends CommonListarComponent<FormaPago, FormaPagoService> implements OnInit {

  constructor(service: FormaPagoService) { 
    super(service);
    this.titulo="Listado de formas de pago";
    this.nombreModel=FormaPago.name;
  }


}
