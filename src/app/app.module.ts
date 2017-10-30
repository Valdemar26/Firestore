import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';

var firebaseConfig = {
  apiKey: "AIzaSyB0edIUafyx18kZQ729qAsWZ4-RGy5_Z1s",
  authDomain: "firestore-e5c4d.firebaseapp.com",
  databaseURL: "https://firestore-e5c4d.firebaseio.com",
  projectId: "firestore-e5c4d",
  storageBucket: "firestore-e5c4d.appspot.com",
  messagingSenderId: "198253830463"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
