import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPago } from "../models/forma-pago";
import { CommonService } from "./common.service";
import { Utils } from "./utils";

@Injectable({
    providedIn: 'root'
  })
  export class  FormaPagoService extends CommonService<FormaPago>{
  
    //protected baseEndpoint='https://solmetdemo.herokuapp.com/api/v1/formasPagos';
    protected baseEndpoint=Utils.getRemote() +'formasPagos';
    constructor(http: HttpClient) { 
        super(http);
    }
  
   
    
  }
  