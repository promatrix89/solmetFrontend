import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { FileData } from 'src/app/models/file-data';
import { ClienteService } from 'src/app/services/cliente.service';
import { PresupuestoService } from 'src/app/services/presupuestos.service';
import { saveAs } from 'file-saver';
import { Presupuesto } from 'src/app/models/presupuesto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.css']
})
export class DetalleClienteComponent implements OnInit {
  cliente: Cliente;
  titulo:string="Detalle del Cliente";

  constructor(private clienteService: ClienteService,
            private activatedRoute: ActivatedRoute,private presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id: number = +params.get('clienteId');
      if(id){
       
        this.clienteService.ver(id).subscribe(cliente => {
            this.cliente=cliente;
        }); 
      }
    });
  }

  crearOrden(presupuesto:Presupuesto, id:number): void {
        console.log(presupuesto);
        this.presupuestoService.createOrdenTrabajo(presupuesto,id).subscribe(orden => {
          console.log(orden);
          Swal.fire('Nuevo',`Orden ${orden.nombre} creado con éxito con id ${orden.id} `, 'success');
         // this.router.navigate([this.redirect]);
        },err => {
          if(err.status===400){
            
          }
        });
      
  }
  downloadFile(presupuestoId:number): void {
    this.presupuestoService
      .download(presupuestoId)
      .subscribe(blob => saveAs(blob));
  }

}
