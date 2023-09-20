import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Si esta autenticado retorna true y lo dejo ingresar a la ruta
    if (this.authService.isAuthenticated) {
      return true;
    } 
    else {
    // En caso contrario lo redirijo 
      this.router.navigate(['/']);
      return false;
    }
  }
}
