import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as $ from 'jquery';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth : AngularFireAuth) { }

  ngOnInit() {
  }

  register(email,pass){

    if(email.length > 0 && pass.length > 0){
      this.auth.auth.createUserWithEmailAndPassword(email,pass).then( ()=> {
      alert("user created");
      }).catch( err => {
        $(".alert").text(err.message);
        $(".alert").fadeIn();
      })
    }

  }
}
