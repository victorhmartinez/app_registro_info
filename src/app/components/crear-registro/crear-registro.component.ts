import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  form:FormGroup
  constructor( private fb:FormBuilder) { 
    this.form=this.fb.group({
     // ubicacion:['',Validators.required],
      cedula:['',[Validators.required,
                  Validators.minLength(10),
                  Validators.maxLength(10)]],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      cantidad:['',[Validators.required,
                  Validators.minLength(1)]],
    })
  }

  ngOnInit(): void {
  }
  crearTarjeta(){
    console.log(this.form)
  }
}
