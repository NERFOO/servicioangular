import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-detalleempleado',
  templateUrl: './detalleempleado.component.html',
  styleUrls: ['./detalleempleado.component.css']
})
export class DetalleempleadoComponent implements OnInit {
  public empleado! : Array<Empleado>;

  @Input() id! : string;

  constructor(private _activeRoute : ActivatedRoute, private _service : EmpleadosService) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe( (parametros : Params) => {
      this.id = parametros['id'];
    })
    this._service.getEmpleadosId(this.id).subscribe( res => {
      this.empleado = res;
    })
  }

}
