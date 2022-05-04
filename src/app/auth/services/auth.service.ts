import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl; 
  private _auth: Auth | undefined;

  get auth(): Auth {
      return {...this._auth! }
  }


  constructor(private http: HttpClient) { }


  login() {
    //por ahora configurado con este usuario = 1 
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
              .pipe(
                tap(auth => this._auth = auth)
                //tap(resp => console.log('AUTHSERVICE', resp))
              )
    ; 
  }


}
