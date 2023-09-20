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

    sendForm() {
      // Si el email y la contraseña son invalidos saldrá una notificacion respectiva
    if (!this.authForm.valid){
      this.validEmail();
      this.validPassword();
      return;
    }
    this.credentials.username = this.authForm.value.email;
    this.credentials.password = this.authForm.value.password;
    // Pasa eso hago el login con las credenciales escritas
    this.authService.login(this.credentials)
  }

  // Notificacion Push para Password e Email.
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
