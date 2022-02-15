import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listador',
  templateUrl: './listador.component.html',
  styleUrls: ['./listador.component.css']
})
export class ListadorComponent implements OnInit {
  listProductos :any []
  constructor() { 
    this.listProductos=[
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
      {
        nombre:"Juan",
        urlImagen:"https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png",
      },
    ]
  }

  ngOnInit(): void {
  }

}
