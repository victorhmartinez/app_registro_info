import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/listar-registros/buscador/buscador.component';
import { ListadorComponent } from './components/listar-registros/listador/listador.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    ListarRegistrosComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    ListadorComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
