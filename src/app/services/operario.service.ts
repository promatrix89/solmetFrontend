import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Localidad } from '../models/localidad';
import { Operario } from '../models/operario';
import { CommonService } from './common.service';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class OperarioService extends CommonService<Operario>{
  protected base='http://localhost:8080/';
 // protected baseEndpoint='https://solmetdemo.herokuapp.com:8080/api/v1/operarios';
  protected baseEndpoint=Utils.getRemote() +'operarios';
  
  constructor(http: HttpClient) { 
    super(http);
}
public listarLocalidades(): Observable<Localidad[]>{
  return this.http.get<Localidad[]>(Utils.getRemote() +'clientes/localidades/listar'); //Cambiar aca cuando se pasa a Remoto/local
}

public filtrarOperarios(term:string):Observable<Operario[]>{
  return this.http.get<Operario[]>(`${this.baseEndpoint}/filtrar-operario/${term}`);
  
}
}
