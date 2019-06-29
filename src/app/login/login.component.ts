import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth : AngularFireAuth) { }

  ngOnInit() {
  }

  login(email,pass){
   this.auth.auth.signInWithEmailAndPassword(email,pass).then( ()=> {
     
    alert("Loged in");

   }).catch( err => {
    $(".alert").text(err.message);
    $(".alert").fadeIn();
   });
  }

}
