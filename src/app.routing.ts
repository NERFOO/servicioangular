import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app/components/home/home.component";
import { PadrecomicComponent } from "./app/components/padrecomic/padrecomic.component";
import { ComicsinyeccionComponent } from "./app/components/comicsinyeccion/comicsinyeccion.component";
import { PersonasapiComponent } from "./app/components/personasapi/personasapi.component";

const appRoutes : Routes = [
    {path : "" , component : HomeComponent},
    {path : "padrecomics" , component : PadrecomicComponent},
    {path : "comicsinyeccion" , component : ComicsinyeccionComponent},
    {path : "personasapi" , component : PersonasapiComponent},
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);



