import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Credentials } from './../models/crendials.models';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl:string = environment.apiUrl;
  isAuthenticated:boolean = false
  loginError = false;
  constructor(private http: HttpClient, private router: Router) {}

  login(Credentials: Credentials) {
    return this.http.post(this.apiUrl,{
        username:Credentials.username,
        password:Credentials.password
    }).subscribe((response:any)=>{
        const token = response.accessToken;
        // Solo en caso de recibir el token el usuario es considerado autenticado
        if(response && token){
            // cambio is Authenticated a true para que el guard no me regrese al login. 
            this.isAuthenticated = true;
            // Luego voy a la ruta Dasboard
            this.router.navigate(['/dashboard']);
            //Finalmente fuardo el token en el local storage hasta que el usuario se desloguee
            localStorage.setItem('authToken', token);
        }
    }, (error:any)=> {
      // Saldra una notificacion push para avisar al usurio de que su login ha sido rechazado
        this.loginError = true;
        console.log(error)
    });
  }

  logout(){
    // Borro el token del localStorage
    localStorage.removeItem('authToken');
    // Paso isAuth a false
    this.isAuthenticated = false;
    // Lo envio al path de inicio
    this.router.navigate(['/']);
  }
}