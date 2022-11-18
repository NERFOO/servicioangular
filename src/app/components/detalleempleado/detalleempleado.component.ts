import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empleado! : Empleado;

  constructor(private _activeRoute : ActivatedRoute, private _service : EmpleadosService) { }

  cargarEmpleadoId(id : number) : void {
    this._service.getEmpleadosId(id.toString()).subscribe( res => {
      this.empleado = res;
    })
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe( (parametros : Params) => {
      var id = parametros['id'];
      this.cargarEmpleadoId(id);
    })
  }

}
