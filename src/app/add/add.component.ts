import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public db : AngularFireDatabase,public route : Router) { }

  ngOnInit() {
  }

  add(title,sub){
    this.db.list("posts").push({
      title:title,
      sub:sub
    }).then(  ()=> {
     this.route.navigate(["/home"])
    })
   }

}
