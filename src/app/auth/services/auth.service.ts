import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl; 

  constructor(private http: HttpClient) { }


  login() {
    //por ahora configurado con este usuario = 1 
    return this.http.get(`${ this.baseUrl }/usuarios/1`); 
  }


}
