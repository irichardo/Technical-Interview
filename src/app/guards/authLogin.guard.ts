import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      // De estar logeado el usuario no se le perimitira ver la parte del login
      this.router.navigate(['/dashboard']);
      return false;
    } else {
      return true;
    }
  }
}