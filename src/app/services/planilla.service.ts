import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlanillaFormComponent } from '../components/planillasFormacionCosto/planilla-form/planilla-form.component';
import { Localidad } from '../models/localidad';
import { Operario } from '../models/operario';
import { PlanillaFormacionCosto } from '../models/planilla-formacion-costo';
import { CommonService } from './common.service';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class PlanillaService extends CommonService<PlanillaFormacionCosto>{

  //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/planillaCostos';
  protected baseEndpoint=Utils.getRemote() +'v1/planillaCostos';
  constructor(http: HttpClient) { 
    super(http);
 
}
create(planilla: PlanillaFormacionCosto):Observable<PlanillaFormacionCosto>{
    return this.http.post<PlanillaFormacionCosto>(this.baseEndpoint,planilla);
}
filtrarPlanillas(term:string):Observable<PlanillaFormacionCosto[]>{
  return this.http.get<PlanillaFormacionCosto[]>(`${this.baseEndpoint}/filtrar-planilla/${term}`);
  
}
}