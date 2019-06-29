import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import{ AngularFireDatabaseModule} from '@angular/fire/database';
import { InfoComponent } from './info/info.component'
import { ShareDataService } from './share-data.service';

const firebaseConfig = {
  apiKey: "AIzaSyCztAoE7toHASGHwc-43vGbw_dd0JD88Uc",
  authDomain: "athraatest.firebaseapp.com",
  databaseURL: "https://athraatest.firebaseio.com",
  projectId: "athraatest",
  storageBucket: "",
  messagingSenderId: "852432755132",
  appId: "1:852432755132:web:777b785a5f1246a8"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    RegisterComponent,
    LoginComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    ShareDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
