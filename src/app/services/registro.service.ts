import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Registro } from '../model/registro';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  URL="http://localhost:3000/api/registro";
  constructor(private http:HttpClient) { 

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
}
