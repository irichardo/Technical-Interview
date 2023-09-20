import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Exporto el authService para usar el logOut
  constructor(private authService: AuthService){}
  buttonNavbar: string[]=['account_circle',  'settings']
  logout():void{
    this.authService.logout();
  }
}
