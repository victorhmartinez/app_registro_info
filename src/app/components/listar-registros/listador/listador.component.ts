import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  listRegistros :any []=[]
  constructor(private _registroService:RegistroService) { 
   
  }

  ngOnInit(): void {
    this.getRegisterPlace()
  }
  getRegisterPlace(){
    this._registroService.getRegisterPlaces("San Francisco").subscribe(data=>{
      this.listRegistros=data;
      console.log(this.listRegistros)
    })
  }
}
