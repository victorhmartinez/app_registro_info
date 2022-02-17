export class Registro {
    _id?:string;
    ubicacion:string;
    nombre:string;
    apellido:string;
    registros?:any[]
   
    constructor(ubicacion:string,nombres:string,apellidos:string,cant:number,registros:any[]){
        this.ubicacion=ubicacion;

        this.nombre=nombres;
        this.apellido=apellidos;
        //this.cant=cant;
        this.registros=registros
      
    }
}
