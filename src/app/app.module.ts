import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonComponent } from './person/person.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxTextEditorModule } from 'ngx-text-editor';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


let firebaseConfig = {
  apiKey: "AIzaSyAeavjEQbt5kBDNVW79Do2VVIykCWt-iu0",
  authDomain: "scribe-7c81b.firebaseapp.com",
  databaseURL: "https://scribe-7c81b.firebaseio.com",
  projectId: "scribe-7c81b",
  storageBucket: "scribe-7c81b.appspot.com",
  messagingSenderId: "381787807264",
  appId: "1:381787807264:web:39f87f220878c9581be645",
  measurementId: "G-FEMM5WK4H9"
};
firebase.initializeApp(firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxTextEditorModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
