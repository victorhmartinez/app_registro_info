import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Registro } from 'src/app/model/registro';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  termino="";
  suscription:Subscription;
  listRegistros: any[]=[];
    constructor(private _registroService:RegistroService) { 
      this.suscription=this._registroService.getTerminoBusqueda().subscribe(data=>{
        this.termino=data;
        console.log(data)
        this.obtnerLugares()
      })
    }

  ngOnInit(): void {

  }
  obtnerLugares(){
    this._registroService.getRegisterPlaces(this.termino).subscribe(data=>{
      this.listRegistros=data;
      console.log(this.listRegistros)
    })
  }

  
}
