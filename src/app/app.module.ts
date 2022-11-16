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

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicComponent,
    HijocomicComponent,
    HomeComponent,
    MenuComponent,
    ComicsinyeccionComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, ComicsService, PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
