import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registro } from 'src/app/model/registro';
import { Ubicacion } from 'src/app/model/ubicacion';
import { RegistroService } from 'src/app/services/registro.service';
import { UbicacionService } from 'src/app/services/ubicacion.service';

@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.component.html',
  styleUrls: ['./crear-registro.component.css']
})
export class CrearRegistroComponent implements OnInit {
  registroForm:FormGroup
 
  registros: any[] ;
  listUbicacion:Ubicacion[]=[];
  constructor( private fb:FormBuilder,
    private _productoService:RegistroService,
    private _ubicacionService:UbicacionService) {
    this.registros=[]; 
    this.registroForm=this.fb.group({
     ubicacion:['',Validators.required],
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
    this.obtenerUbicacion()
  }
  crearRegistro(){
    
   
    this.registros.push({cantidad:this.registroForm.value.cantidad})
    const REGISTRO:Registro={
      apellido:this.registroForm.value.apellidos,
      nombre:this.registroForm.value.nombres,
      _id:this.registroForm.value.cedula,
      ubicacion:this.registroForm.value.ubicacion,
      registros:this.registros
    }
    
    console.log("Objeto",REGISTRO)
   
    this._productoService.saveRegistro(REGISTRO).subscribe(data=>{
      console.log("Hecho esta")
      this.registroForm.reset();
    });
  }

  obtenerUbicacion(){
        this._ubicacionService.getUbicacion().subscribe(data=>{
          this.listUbicacion=data
          console.log("Esta es la ubicacion",this.listUbicacion)
        })
    
  }
}
