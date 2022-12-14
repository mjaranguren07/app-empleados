import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() i:number;

  caracteristicas=[];
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarCarac(caracteristicaEmpleado:string){
    this.caracteristicas.push(caracteristicaEmpleado);
  }

}
