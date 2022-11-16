import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { PadrecomicComponent } from "./components/padrecomic/padrecomic.component";
import { ComicsinyeccionComponent } from "./components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./components/personasapi/personasapi.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "padrecomics" , component : PadrecomicComponent},
    {path : "comicsinyeccion" , component : ComicsinyeccionComponent},
    {path : "personasapi" , component : PersonasapiComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);



