import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
 private URL:string;
  constructor(private http:HttpClient) { 
    this.URL=environment.urlAPI+"ubicacion"
  }
  getUbicacion():Observable<any>{
    return this.http.get(this.URL);
  }
}
