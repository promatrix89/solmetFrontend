import { Component, Injectable, Input, OnInit, Output, EventEmitter } from '@angular/core';


import { OrdenDiaOperario } from 'src/app/models/orden-dia-operario';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdenDiaOperarioService } from 'src/app/services/orden-dia-operario.service';
import { OrdenService } from 'src/app/services/orden.service';
import Swal from 'sweetalert2';
import { CommonListarComponent } from '../../common-listar.component';

@Component({
  selector: 'app-orden-trabajo-dias',
  templateUrl: './orden-trabajo-dias.component.html',
  styleUrls: ['./orden-trabajo-dias.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoDiasComponent extends CommonListarComponent<OrdenDiaOperario, OrdenDiaOperarioService> implements OnInit {

  @Input()
  diasOrdenesOperarios: OrdenDiaOperario[];

  @Input()
  estadoOrden: string;

  @Output() 
  updateHorasAlert = new EventEmitter<boolean>();

  constructor(service: OrdenDiaOperarioService,
    private ordenService: OrdenService) {
    super(service);
    this.titulo = 'Listado de clientes';
    this.nombreModel = OrdenDiaOperario.name;
  }

  ngOnInit() {
    
  }
  updateHoras(msg: boolean){
    this.updateHorasAlert.emit(msg);
    //console.log(msg);
  }
  

  public actualizar(dia:OrdenDiaOperario):void{
    console.log(dia);
    this.service.editar(dia).subscribe(dia => {
      Swal.fire('Actualizado', `actualizado con éxito`, 'success');
      console.log(dia);
      this.updateHoras(true);
    });
    
  }
 
}
