import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';


@Component({
  selector: 'app-comicsinyeccion',
  templateUrl: './comicsinyeccion.component.html',
  styleUrls: ['./comicsinyeccion.component.css']
})
export class ComicsinyeccionComponent implements OnInit {
  public comics! : Array<Comic>;

  //EN LOS CONSTRUCTORES SOLAMENTE SE REALIZA LA INVERSION DE CONTROL
  //LOS OBJETOS SE SUELEN UTILIZAR DENTRO DE INIT()
  constructor(private _service : ComicsService) { }

  ngOnInit(): void {
    this.comics = this._service.getComics();
  }

}
