import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-padrecomic',
  templateUrl: './padrecomic.component.html',
  styleUrls: ['./padrecomic.component.css']
})
export class PadrecomicComponent implements OnInit {
  public arrayComics! : Array<Comic>;
  public comicFavorito! : Comic;

  @ViewChild("cajatitulo") cajaTitulo!: ElementRef;
  @ViewChild("cajaimagen") cajaImagen!: ElementRef;
  @ViewChild("cajadescripcion") cajaDescripcion!: ElementRef;

  eliminarComic(event : number) : void {
    this.arrayComics.splice(event, 1);
  }

  //AL MODIFICAR EN EL HIJO RECIBIMOS EL INDEX A MODIFICAR
  modificarComic(event : number) : void {
    var titulo = this.cajaTitulo.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var descripcion = this.cajaDescripcion.nativeElement.value;

    this.arrayComics[event] = new Comic(titulo, imagen, descripcion);
  }

  //AL SELECCIONAR UN FAVORITO EN EL HIJO, RECIBIREMOS UN COMIC
  seleccionarFavorito(event : Comic) : void {
    this.comicFavorito = event;
  }

  insertarComic () : void {
    var titulo = this.cajaTitulo.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var descripcion = this.cajaDescripcion.nativeElement.value;

    var newComic = new Comic(titulo, imagen, descripcion);
    this.arrayComics.push(newComic);
  }

  constructor(private _service : ComicsService) { }

  ngOnInit(): void {
    this.arrayComics = this._service.getComics();
  }

}
