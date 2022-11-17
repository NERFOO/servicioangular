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
    var seleccionados = new Array<string>();
    for(var option of this.cajaSelect.nativeElement.options) {
      if(option.selected == true) {
        seleccionados.push(option.value);
      }
    }
    this._service.getPlantillaFuncionesArray(seleccionados).subscribe( res => {
      this.funcion = res;
    })
  }

  ngOnInit(): void {
    this._service.getPlantillaFunciones().subscribe( res => {
      this.funciones = res;
    })
  }

}
