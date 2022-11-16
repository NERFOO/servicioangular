import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "src/environments/environment";

@Injectable()
export class PersonasService{
    //EN EL CONSTRUCTOR RECIBIMOS EL OBJETO
    //HTTPCLIENT
    constructor(private _http : HttpClient) { }
    //OPCION 1
    // getPersonas() : Promise<any> {

    //OPCION 2
    getPersonas() : Observable<any> {
        var request = "/api/personas/";
        var url = Global.urlPersonas + request;;

        //TENEMOS DOS FORMAS DE TRABAJAR CON LOS SERVICIOS (PROMESAS)
        //(1) COMO EN VUE : CREAR UNA PROMESA AQUI Y CAPTURARLA DENTRO DE LA PETICION (El then se cambia por subscribe en la promesa)
        // let promise = new Promise((resolve) => {
        //     this._http.get(url).subscribe( res => {
        //         resolve(res);
        //     });
        // });
        // return promise;


        //(2) DEVOLVER DIRECTAMENTE LA PROMESA DE LA PETICION PARA QUE LA RESUELVA EL COMPONENT
        return this._http.get(url);
    }
}