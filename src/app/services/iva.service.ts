import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FormaPago } from "../models/forma-pago";
import { Iva } from "../models/iva";
import { CommonService } from "./common.service";
import { Utils } from "./utils";

@Injectable({
    providedIn: 'root'
  })
  export class  IvaService extends CommonService<Iva>{
  
    //protected baseEndpoint='https://solmetdemo.herokuapp.com:8080/api/v1/iva';
    protected baseEndpoint=Utils.getRemote() +'iva';
  
    constructor(http: HttpClient) { 
        super(http);
    }
  
   
    
  }