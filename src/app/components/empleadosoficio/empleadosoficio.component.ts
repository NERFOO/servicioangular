import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css']
})
export class EmpleadosoficioComponent implements OnInit {
  public oficios! : Array<string>;
  public empleados! : Array<Empleado>;

  @ViewChild("selectoficio") selectOficio! : ElementRef;

  buscarEmpleados() : void {
    var oficio = this.selectOficio.nativeElement.value;
    this._service.getEmpleadosOficios(oficio).subscribe( res => {
      this.empleados = res;
    })
  }

  constructor(private _service : EmpleadosService) { }

  ngOnInit(): void {
    this._service.getOficios().subscribe( res => {
      this.oficios = res;
    })
  }

}
