export class Registro {
    id?:string;
    ubicacion:string;
    nroCedula:string;
    nombres:string;
    apellidos:string;
    cant:number;
    fecha:Date;
    constructor(ubicacion:string,nroCedula:string,nombres:string,apellidos:string,cant:number,){
        this.ubicacion=ubicacion;
        this.nroCedula=nroCedula;
        this.nombres=nombres;
        this.apellidos=apellidos;
        this.cant=cant;
        this.fecha=new Date()
    }
}
