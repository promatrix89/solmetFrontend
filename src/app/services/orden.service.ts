import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../models/localidad';
import { Operario } from '../models/operario';
import { Orden } from '../models/orden';
import { OrdenDiaOperario } from '../models/orden-dia-operario';
import { OrdenEstadoDto } from '../models/orden-estado-dto';
import { CommonService } from './common.service';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class OrdenService extends CommonService<Orden>{
  ordenDiaList: OrdenDiaOperario[];
  // protected baseEndpoint='https://solmetdemo.herokuapp.com:8080/api/v1/operarios';
  protected baseEndpoint = Utils.getRemote() +'v1/ordenesTrabajo';

  constructor(http: HttpClient) {
    super(http);
  }
  

  
  public actualizar(orden:Orden):Observable<OrdenEstadoDto>{
    let ordenEstado: OrdenEstadoDto= new OrdenEstadoDto();
    ordenEstado.id=orden.id;
    ordenEstado.estado=orden.estado;
    console.log(ordenEstado);
    return this.http.put<OrdenEstadoDto>(this.baseEndpoint+"/updateEstado",ordenEstado);
  }

}