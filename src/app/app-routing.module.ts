import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrearRegistroComponent } from './components/crear-registro/crear-registro.component';
import { ListarRegistrosComponent } from './components/listar-registros/listar-registros.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, children:[
    { path:'registro',component:CrearRegistroComponent},
    {path:'listado',component:ListarRegistrosComponent}
  ]
  },
  
  {path:'',redirectTo:'home',pathMatch:'full'},

  { path:'registro',component:CrearRegistroComponent},

  {path:'**',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],exports:[RouterModule]
})
export class AppRoutingModule { }
