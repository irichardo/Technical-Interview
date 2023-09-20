import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Credentials } from 'src/app/models/crendials.models';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  authenticated:boolean = false;
  authForm: FormGroup;
  credentialsValid={
    notifyEmailError:false,
    notifyPasswordError:false
  }

  credentials: Credentials = {
    username: '',
    password: ''
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  isAuthenticated():boolean{
    return this.authenticated;
  }


    sendForm() {
    if (!this.authForm.valid){
      this.validEmail();
      this.validPassword();
      return;
    }
    this.credentials.username = this.authForm.value.email;
    this.credentials.password = this.authForm.value.password;
    this.authService.login(this.credentials)
  }

  validEmail(){
    if(!this.authForm.controls['email'].valid){
      this.credentialsValid.notifyEmailError = true;
      setTimeout(() =>{
        this.credentialsValid.notifyEmailError = false;
      },3000)
    }
  }

  validPassword(){
      if(!this.authForm.controls['password'].valid){
        this.credentialsValid.notifyPasswordError = true;
        setTimeout(() =>{
          this.credentialsValid.notifyPasswordError = false;
        },3000)
      }
  }



  }
