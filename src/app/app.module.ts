import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from 'src/app/app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PadrecomicComponent } from './components/padrecomic/padrecomic.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { ComicsinyeccionComponent } from './components/comicsinyeccion/comicsinyeccion.component';
import { ComicsService } from './services/comics.service';
import {HttpClientModule} from '@angular/common/http';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasService } from './services/personas.service';
import { EmpleadosService } from './services/empleados.service';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PlantillasService } from './services/plantillas.service';
import { PlantillamultipleComponent } from './components/plantillamultiple/plantillamultiple.component';
import { MaestrodetalleComponent } from './components/maestrodetalle/maestrodetalle.component';
import { DetalleempleadoComponent } from './components/detalleempleado/detalleempleado.component';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicComponent,
    HijocomicComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    PlantillaComponent,
    PlantillamultipleComponent,
    MaestrodetalleComponent,
    DetalleempleadoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService, EmpleadosService, PlantillasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
