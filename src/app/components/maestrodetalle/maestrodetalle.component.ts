import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-maestrodetalle',
  templateUrl: './maestrodetalle.component.html',
  styleUrls: ['./maestrodetalle.component.css']
})
export class MaestrodetalleComponent implements OnInit {
  public empleados! : Array<Empleado>;

  constructor(private _service : EmpleadosService) { }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe( res => {
      this.empleados = res;
    })
  }

}
