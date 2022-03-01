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
  _id:String="";
  registros: any[] ;
  bandera:boolean=true;
  isEditar:boolean=false;
  
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
   if(this.registroForm.valid){
    this.registros.push({cantidad:this.registroForm.value.cantidad})
    const REGISTRO:Registro={
      apellido:this.registroForm.value.apellidos,
      nombre:this.registroForm.value.nombres,
      _id:this.registroForm.value.cedula,
      ubicacion:this.registroForm.value.ubicacion,
      registros:this.registros
    }
    this.registros=[];
    console.log("Objeto",REGISTRO);
    if(this.isEditar){
      this._productoService.editResgister(REGISTRO).subscribe(data=>{
        console.log("Actualizado")
        this.registroForm.reset();
      })
    }else{
      this._productoService.saveRegistro(REGISTRO).subscribe(data=>{
        console.log("Hecho esta")
        this.registroForm.reset();
      });
    }
 
    this.bandera=true;
    this.isEditar=false;
   }
   
  }

  obtenerUbicacion(){
        this._ubicacionService.getUbicacion().subscribe(data=>{
          this.listUbicacion=data
          console.log("Esta es la ubicacion",this.listUbicacion)
        })
    
  }

  obtnerInfoRegistro(){
    this._id=this.registroForm.value.cedula;
    this.bandera=false;
    this._productoService.getData(this._id).subscribe(data=>{ 
    if(data.length>0){

      console.log("Hay data");
      this.registroForm.setValue({
        ubicacion:data[0].ubicacion,
        nombres:data[0].nombre,
        apellidos:data[0].apellido,
        cedula:data[0]._id,
        cantidad:""
      });
      this.isEditar=true
    }else{
     
    }

    })
  }
 
}
