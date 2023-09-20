import { Component, OnInit} from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 
  backgroundImages: string[] = [
    'assets/bg_01.jpg',
    'assets/bg_02.jpg',
    'assets/bg_03.jpg',
  ];

  currentBackgroundImage: string = this.backgroundImages[Math.floor(Math.random()*3)];

  ngOnInit() {
    const interval$ = interval(3000);
    interval$
      .pipe(
        map(index => index % this.backgroundImages.length),
      )
      .subscribe(index =>{
        this.currentBackgroundImage = this.backgroundImages[index];
      })
  }
}
