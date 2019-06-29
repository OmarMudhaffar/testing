import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testingan';

  constructor(public navCtrl : Router) {

   }

  singup(){
    this.navCtrl.navigate(["/register"]);
   }

   singin(){
    this.navCtrl.navigate(["/login"]);
   }

   
}
