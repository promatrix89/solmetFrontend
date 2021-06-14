import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  buttontoggled:boolean=false;
  isCollapse = false;   // guardamos el valor
  constructor() { }

  ngOnInit(): void {
  }
  
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }


}
