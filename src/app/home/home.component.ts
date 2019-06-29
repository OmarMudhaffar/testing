import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase} from '@angular/fire/database'
import { Observable, from } from 'rxjs';
import {ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list : Observable<any>
  
  constructor(public navCtrl : Router,public db : AngularFireDatabase,public share : ShareDataService) { 
    this.list = db.list("posts").snapshotChanges();
    
  }

  ngOnInit() {
  }

  singup(){
   this.navCtrl.navigate(["/register"]);
  }

  show(key,title,sub){
    this.navCtrl.navigate(["/info"])
  }
}
