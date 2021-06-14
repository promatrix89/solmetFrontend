import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operario } from 'src/app/models/operario';
import { Orden } from 'src/app/models/orden';
import { OperarioService } from 'src/app/services/operario.service';
import { OrdenService } from 'src/app/services/orden.service';
import { OrdenTrabajoDiasComponent } from './orden-trabajo-dias/orden-trabajo-dias.component';
import { CommonListarComponent } from '../common-listar.component';
import { OrdenDiaOperario } from 'src/app/models/orden-dia-operario';
import { OrdenDiaOperarioService } from 'src/app/services/orden-dia-operario.service';
import Swal from 'sweetalert2';
import { OperarioHorasDto } from 'src/app/models/OperarioHorasDto';
import { OrdenEstadoDto } from 'src/app/models/orden-estado-dto';

@Component({
  selector: 'app-orden-trabajo-detalle',
  templateUrl: './orden-trabajo-detalle.component.html',
  styles: [
  ]
})
export class OrdenTrabajoDetalleComponent implements OnInit {
  orden: Orden;
  estado: string;
  operarios: Operario[];
  error: any;
  idOrden: number;
  protected redirect: string = 'ordenTrabajo/detalle/';
  ordenDiaOperario: OrdenDiaOperario = new OrdenDiaOperario();
  estados: string[] = new Array();
  operariosHoras: OperarioHorasDto[];
  comunicarHoras: boolean = false;

  constructor(private operarioService: OperarioService
    , private ordenService: OrdenService,
    private operarioDiaTrabajo: OrdenDiaOperarioService,
    private route: ActivatedRoute,
    private router: Router,
    private ordenes: OrdenTrabajoDiasComponent,
    private changeDetectorRefs: ChangeDetectorRef
  ) {

  }

  ngOnInit(): void {
    this.refreshAll();
  }

  private refreshAll() {
    this.estados.push("En proceso");
    this.estados.push("Finalizado");
    this.route.paramMap.subscribe(params => {
      const idOrden: number = +params.get('id');
      if (idOrden) {
        this.idOrden = idOrden;
        this.consultarOrden(idOrden);
      }
      this.refreshHoras();
      this.operarioService.listar().subscribe(operarios => {
        this.operarios = operarios;
       
      });

    });
    

  }

  booleanReadyToComunicate(confirmation: boolean) {
    this.comunicarHoras = confirmation;
    if (this.comunicarHoras) {
     
      this.refreshHoras();
    }
  }


  private refreshHoras(): void {
    this.operarioDiaTrabajo.obtenerHorasOrden(this.idOrden).subscribe(operariosHoras => {
      console.log("here ");
      console.log(operariosHoras);
      this.operariosHoras = operariosHoras;
     
    });
  }
  private consultarOrden(idOrden){
    this.ordenService.ver(idOrden).subscribe(orden => {
      this.orden = orden;
      this.estado = orden.estado;
      console.log(orden);
      this.ordenDiaOperario.orden = orden;
    });
  }

  public actualizarEstado(): void {
    this.ordenService.actualizar(this.orden).subscribe(orden => {
      if (orden.estadoBool == true) {
        Swal.fire('Modificado', `Modificado con éxito`, 'success');
        this.consultarOrden(this.orden.id);
        
      } else {
        Swal.fire('No pude!', `Ver: ` + orden.mensaje, 'warning');
      }
      
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    })
    
  }

  public crear(): void {
    this.operarioDiaTrabajo.crear(this.ordenDiaOperario).subscribe(m => {
      console.log(this.ordenDiaOperario);
      Swal.fire('Nuevo', `creado con éxito`, 'success');
      this.ordenService.ver(this.idOrden).subscribe(orden => {
        this.orden = orden;
        console.log(orden);
        this.ordenDiaOperario.orden = orden;
      });
      this.router.navigate([this.redirect+this.orden.id]);
    }, err => {
      if (err.status === 400) {
        this.error = err.error;
        console.log(this.error);
      }
    });
  }

}
