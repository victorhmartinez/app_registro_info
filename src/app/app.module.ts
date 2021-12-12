import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    ListarRegistrosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
