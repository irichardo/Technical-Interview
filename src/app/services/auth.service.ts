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
        if(response && token){
            this.isAuthenticated = true;
            this.router.navigate(['/dashboard']);
            localStorage.setItem('authToken', token);
        }
    }, (error:any)=> {
        this.loginError = true;
        console.log(error)
    });
  }

  logout(){
    localStorage.removeItem('authToken');
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }
}