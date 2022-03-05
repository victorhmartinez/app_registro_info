import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'registro', component: CrearRegistroComponent },
      { path: 'listado', component: ListarRegistrosComponent }
    ]
  },

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegistroUsuarioComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
