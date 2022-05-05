import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, map, of } from 'rxjs';
//import { tap, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl; 
  private _auth: Auth | undefined;

  get auth(): Auth {
      return {...this._auth! }
  }

  verificaAutenticacion() : Observable<boolean> {
      if (!localStorage.getItem('token') ){
        //return false; 
        return of(false); 
      } 

      return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
             .pipe(
               map(auth => {
                 this._auth = auth; 
                 console.log('map', auth);
                 return true;
               })
             )

      //return true; 
      //return of(true); 
  }

  constructor(private http: HttpClient) { }


  login() {
    //por ahora configurado con este usuario = 1 
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                tap(auth => this._auth = auth), 
                tap(auth => localStorage.setItem('token', auth.id ))
                //tap(resp => console.log('AUTHSERVICE', resp))
              )
    ; 
  }

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token'); 
  }


}
