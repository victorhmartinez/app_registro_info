import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
nombreLugar:string;
  constructor(private _registroService:RegistroService) {
    this.nombreLugar=""
   }

  ngOnInit(): void {
  }
buscarLugares(){

  if(this.nombreLugar===""){
    return
  }

  this._registroService.enviarTerminoBusqueda(this.nombreLugar);
}
}
