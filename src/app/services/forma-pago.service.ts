import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPago } from "../models/forma-pago";
import { CommonService } from "./common.service";

@Injectable({
    providedIn: 'root'
  })
  export class  FormaPagoService extends CommonService<FormaPago>{
  
    //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/formasPagos';
    protected baseEndpoint='http://localhost:8080/api/v1/formasPagos';
    constructor(http: HttpClient) { 
        super(http);
    }
  
   
    
  }
  