import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
  
  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    
      return this.authService.verificaAutenticacion()
              .pipe(
                tap(estaAutenticado => {
                  if (!estaAutenticado) {
                    this.router.navigate(['./auth/login'])
                  }
                })
              )
      ; 

      /*
      if (this.authService.auth.id) {
        console.log('autenticado en el guard ...! - canActivate');
        return true;
      }
      else {
        console.log('bloqueado en el guard ...! - canActivate');
        return false; 
        //Cuando retorna false, la pagina se muestra en blanco 
        //lo cual indica que el guard bloqueo el acceso a ese recurso 
      }
      */

  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.authService.verificaAutenticacion()
              .pipe(
                tap(estaAutenticado => {
                  if (!estaAutenticado) {
                    this.router.navigate(['./auth/login'])
                  }
                })
              )
      ; 


      /*
      if (this.authService.auth.id) {
        console.log('autenticado en el guard ...! - canLoad');
        return true;
      }
      else {
        console.log('bloqueado en el guard ...! - canLoad');
        return false; 
        //Cuando retorna false, la pagina se muestra en blanco 
        //lo cual indica que el guard bloqueo el acceso a ese recurso 
      }
      */

      /*console.log('canLoad', true);
      console.log(route);
      console.log(segments);
      */

    
  }

  /*
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  */
}
