import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Registro } from '../model/registro';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})

export class RegistroService {

  private URL:string;
  constructor(private http:HttpClient) { 
    this.URL=environment.urlAPI+"registro";
  }
  saveRegistro(registro:Registro):Observable<any>{
    return this.http.post(this.URL,registro);
  }
  getData(_id:String):Observable<any>{
    console.log(this.URL+"/filter?_id="+_id)
    return this.http.get(this.URL+"/filter?_id="+_id);

  }
  editResgister(registro:Registro):Observable<any>{
    return this.http.put(this.URL+"/update/"+registro._id,registro);
  }
  getRegisterPlaces(ubicacion:string):Observable<any>{
    return this.http.get(this.URL+"/filter?ubicacion="+ubicacion);
  }
}
