import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Routes,Router,RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './service/auth.service';


const approuting :Routes=[

  {path:'home' ,component:HomeComponent},
  {path:'signin', component:SigninComponent},
  {path:'signup', component:SignupComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approuting)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
