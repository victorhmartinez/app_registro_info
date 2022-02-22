import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css']
})
export class ListarRegistrosComponent implements OnInit {


  ngOnInit(): void {
  }

}
