import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class EmpleadosService {
    constructor(private _http : HttpClient) { }

    getEmpleados() : Observable<any> {
        var request = "/api/empleados";
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosSalario(salario : string) : Observable<any> {
        var request = "/api/empleados/empleadosSalario/" + salario;
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }

    getOficios() : Observable<any> {
        var request = "/api/empleados/oficios";
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosOficios(oficio : string) : Observable<any> {
        var request ="/api/Empleados/EmpleadosOficio/" + oficio;
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }

    getEmpleadosId(id : string): Observable<any> {
        var request = "/api/empleados/" + id;
        var url = environment.urlEmpleados + request;

        return this._http.get(url);
    }
}