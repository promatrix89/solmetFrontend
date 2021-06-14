import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { FormaPago } from 'src/app/models/forma-pago';

import { CommonFormComponent } from '../../common-form.component';
import { CommonListarComponent } from '../../common-listar.component';
import { FormaPagoService} from 'src/app/services/forma-pago.service';

@Component({
  selector: 'app-forma-pago-form',
  templateUrl: './forma-pago-form.component.html',
  styles: [
  ]
})
export class FormaPagoFormComponent  extends CommonFormComponent<FormaPago,FormaPagoService> implements OnInit {

  constructor(service:FormaPagoService,  router: Router,  route: ActivatedRoute) { 
    super(service,router,route);
    
    this.titulo="Cargar Forma de Pago";
    this.model=new FormaPago();
  
    this.redirect='/formaPago';
    this.nombreModel=FormaPago.name;
    
  }

}
