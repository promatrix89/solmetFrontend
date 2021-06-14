import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iva } from 'src/app/models/iva';
import { IvaService } from 'src/app/services/iva.service';
import { CommonFormComponent } from '../../common-form.component';

@Component({
  selector: 'app-iva-form',
  templateUrl: './iva-form.component.html',
  styles: [
  ]
})
export class IvaFormComponent  extends CommonFormComponent<Iva,IvaService> implements OnInit {

  constructor(service:IvaService,  router: Router,  route: ActivatedRoute) { 
    super(service,router,route);
    
    this.titulo="Cargar Iva";
    this.model=new Iva();
    this.model.nombre='iva';
    this.redirect='/iva';
    this.nombreModel=Iva.name;
    
  }

 

}
