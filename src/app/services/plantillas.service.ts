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

    getPlantillaFuncionesArray(funciones : any) : Observable<any> {
        var data = "";
        for(var funcion of funciones) {
            data += "funcion=" + funcion + "&";
        }
        data = data.substring(0, data.length -1);
        console.log(data)

        var request = "/api/plantilla/plantillaFunciones?" + data;
        var url = environment.urlPlantilla + request;

        return this._http.get(url);
    }
}