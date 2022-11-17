import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class PlantillasService {
    constructor(private _http : HttpClient) { }

    getPlantillaFunciones() : Observable<any> {
        var request = "/api/Plantilla/Funciones";
        var url = environment.urlPlantilla + request;

        return this._http.get(url);
    }

    getPlantillaFuncion(funcion : string) : Observable<any> {
        var request = "/api/Plantilla/PlantillaFuncion/" + funcion;
        var url = environment.urlPlantilla + request;

        return this._http.get(url);
    }

    getPlantillaFuncionesArray(peticion : void) : Observable<any> {
        var request = "/api/plantilla/plantillaFunciones/" + peticion;
        var url = environment.urlPlantilla + request;

        return this._http.get(url);
    }
}