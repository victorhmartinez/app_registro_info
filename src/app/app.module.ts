import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/listar-registros/buscador/buscador.component';
import { ListadorComponent } from './components/listar-registros/listador/listador.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearRegistroComponent,
    ListarRegistrosComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    ListadorComponent,
    LoginComponent,
    RegistroUsuarioComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
