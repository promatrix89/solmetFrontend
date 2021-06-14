import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OperarioHorasDto } from "../models/OperarioHorasDto";
import { OrdenDiaOperario } from "../models/orden-dia-operario";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
  })
  export class OrdenDiaOperarioService extends CommonService<OrdenDiaOperario>{
    protected base='http://localhost:8080/';
   // protected baseEndpoint='https://solmetdemo.herokuapp.com:8080/api/v1/operarios';
    protected baseEndpoint=this.base+'api/v1/orden-dia-trabajo';
    
    constructor(http: HttpClient) { 
      super(http);
  }

    public obtenerHorasOrden(id: number):Observable<OperarioHorasDto[]>{
      return this.http.get<OperarioHorasDto[]>(`${this.baseEndpoint}/diasOperario/${id}`);
    }
  }