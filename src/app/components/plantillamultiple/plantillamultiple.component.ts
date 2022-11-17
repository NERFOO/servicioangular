import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Plantilla } from 'src/app/models/plantilla';
import { PlantillasService } from 'src/app/services/plantillas.service';

@Component({
  selector: 'app-plantillamultiple',
  templateUrl: './plantillamultiple.component.html',
  styleUrls: ['./plantillamultiple.component.css']
})
export class PlantillamultipleComponent implements OnInit {
  public funciones! : Array<string>;
  public funcion! : Array<Plantilla>;

  constructor(private _service : PlantillasService) { }

  @ViewChild("cajaselect") cajaSelect! : ElementRef;
  getPlantillaId() : void {
    var funcion = this.cajaSelect.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).subscribe( res => {
      this.funcion = res;
    })
  }

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe( res => {
      this.funciones = res;
    })
  }

}
