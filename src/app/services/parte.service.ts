import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parte } from '../models/parte';
import { CommonService } from './common.service';
import { Utils } from './utils';

@Injectable({
  providedIn: 'root'
})
export class ParteService extends CommonService<Parte>{

  protected baseEndpoint=Utils.getRemote() +'api/v1/partes';
  //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/partes';
  

  constructor(httpd: HttpClient) { 
      super(httpd);
  }

  filtrarPartes(term:string):Observable<Parte[]>{
    return this.http.get<Parte[]>(`${this.baseEndpoint}/filtrar-parte/${term}`);
    
  }
  
}
