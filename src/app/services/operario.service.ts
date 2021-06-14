import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../models/localidad';
import { Operario } from '../models/operario';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class OperarioService extends CommonService<Operario>{
  protected base='http://localhost:8080/';
 // protected baseEndpoint='https://solmetdemo.herokuapp.com:8080/api/v1/operarios';
  protected baseEndpoint=this.base+'api/v1/operarios';
  
  constructor(http: HttpClient) { 
    super(http);
}
public listarLocalidades(): Observable<Localidad[]>{
  return this.http.get<Localidad[]>(this.base+'/api/v1/clientes/localidades/listar');
}

public filtrarOperarios(term:string):Observable<Operario[]>{
  return this.http.get<Operario[]>(`${this.baseEndpoint}/filtrar-operario/${term}`);
  
}
}
