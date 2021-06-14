import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanillaFormComponent } from '../components/planillasFormacionCosto/planilla-form/planilla-form.component';
import { FileData } from '../models/file-data';
import { Localidad } from '../models/localidad';
import { Operario } from '../models/operario';
import { Orden } from '../models/orden';
import { PlanillaFormacionCosto } from '../models/planilla-formacion-costo';
import { Presupuesto } from '../models/presupuesto';
import { CommonService } from './common.service';



@Injectable({
  providedIn: 'root'
})
export class PresupuestoService extends CommonService<Presupuesto>{

  //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/presupuestos';
  protected baseEndpoint='http://localhost:8080/api/v1/presupuestos';
  constructor(http: HttpClient) { 
    super(http);
 
}

list(): Observable<FileData[]> {
  return this.http.get<FileData[]>(`${this.baseEndpoint}/view`);
}
download(presupuestoId:number): Observable<Blob> {
  return this.http.get(`${this.baseEndpoint}/view?id=`+presupuestoId, {
    responseType: 'blob'
  });
}

createOrdenTrabajo(presupuesto:Presupuesto,id: number): Observable<Orden> {
  return this.http.post<Orden>(this.baseEndpoint+'/aprobar/'+id,presupuesto);
}

create(presupuesto: Presupuesto):Observable<Presupuesto>{
    // console.log(presupuesto);
    return this.http.post<Presupuesto>(this.baseEndpoint,presupuesto);
}
}