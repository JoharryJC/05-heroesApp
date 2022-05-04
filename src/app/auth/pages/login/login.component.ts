import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent   {

  constructor(private route: Router, 
            private authService: AuthService) { }

  login() {
    //ir al Backend para confirmar que el usuario exista 
    // usar un servicio que contenga el usuario almacenado 

    this.route.navigate(['./heroes']); 

  }
   

}
