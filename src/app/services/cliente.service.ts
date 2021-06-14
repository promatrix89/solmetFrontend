import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../models/cliente';
import { Localidad } from '../models/localidad';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CommonService<Cliente>{

  //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/clientes';
  protected baseEndpoint='http://localhost:8080/api/v1/clientes';
  constructor(http: HttpClient) {
      super(http);
  }
  public listarLocalidades(): Observable<Localidad[]>{
    console.log(this.baseEndpoint+'/localidades/listar');
    return this.http.get<Localidad[]>(this.baseEndpoint+'/localidades/listar');
  }
  
  

  
}
