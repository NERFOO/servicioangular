import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from 'src/app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PadrecomicComponent } from './components/padrecomic/padrecomic.component';
import { HijocomicComponent } from './components/hijocomic/hijocomic.component';

@NgModule({
  declarations: [
    AppComponent,
    PadrecomicComponent,
    HijocomicComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
