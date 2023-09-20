import { Component, OnInit, Signal } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private authService: AuthService){}

  ngOnInit(): void {
      const token = localStorage.getItem('authToken');
      if(token){
        this.authService.isAuthenticated = true;
      }
  }

}
