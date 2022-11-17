import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PadrecomicComponent } from "./components/padrecomic/padrecomic.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";
import { EmpleadossalarioComponent } from "./components/empleadossalario/empleadossalario.component";
import { EmpleadosoficioComponent } from "./components/empleadosoficio/empleadosoficio.component";
import { PlantillaComponent } from "./components/plantilla/plantilla.component";
import { PlantillamultipleComponent } from "./components/plantillamultiple/plantillamultiple.component";
import { MaestrodetalleComponent } from "./components/maestrodetalle/maestrodetalle.component";
import { DetalleempleadoComponent } from "./components/detalleempleado/detalleempleado.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "padrecomics" , component : PadrecomicComponent},
    {path : "comicsinyeccion" , component : ComicsinyeccionComponent},
    {path : "personasapi" , component : PersonasapiComponent},
    {path : "empleados" , component : EmpleadossalarioComponent},
    {path : "empleadosoficio" , component : EmpleadosoficioComponent},
    {path : "plantilla" , component : PlantillaComponent},
    {path : "plantillamultiple" , component : PlantillamultipleComponent},
    {path : "maestrodetalle" , component : MaestrodetalleComponent},
    {path : "detalleempleado/:id" , component : DetalleempleadoComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);



